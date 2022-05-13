import React from "react";
import { useLocation } from "react-router-dom";
import { finalLocation } from "./Types/types";
import { Link } from "react-router-dom";
import { PieChart, Pie, Tooltip } from "recharts";
import Image from "./pixbg2.jpg";
import { Paper } from "@material-ui/core";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  },
};

function Result() {
  const location: finalLocation = useLocation();
  const { state } = location;
  const { amount, counter } = state;

  const data: any[] = [
    { name: "Correct Answers", value: counter },
    { name: "Incorrect Answers", value: amount - counter },
  ];

  return (
    <Paper style={styles.paperContainer}>
      <div className="Result">
        <h2 style={{ paddingBottom: "20px", paddingTop: "20px" }}>
          Results Page
        </h2>
        <div className="ResultBox">
          <span style={{ color: "#D3D3D3" }}>Obtained Marks: {counter} </span>
          <span style={{ color: "#D3D3D3" }}>Total Marks: {amount}</span>
          <span style={{ color: "#D3D3D3" }}>
            Percentage: {((counter / amount) * 100).toFixed(2) + "%"}
          </span>
          <span style={{ color: "#D3D3D3" }}>
            Status: {(+counter / +amount) * 100 > 50 ? "Passed" : "Failed"}
          </span>
        </div>
        <div className="">
          <p style={{ textAlign: "center" }}>
            <strong>Pie Chart</strong> <br /> Hover to see results
          </p>
        </div>
        <PieChart width={630} height={220}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={75}
            fill="#504196"
            label
          />
          <Tooltip />
        </PieChart>

        <div
          className="GoBack"
          style={{
            paddingTop: "10px",
            paddingRight: "30px",
          }}
        >
          <Link to="/">
            <button type="submit" className="submit_Button">
              Start Again
            </button>
          </Link>
        </div>
      </div>
    </Paper>
  );
}

export default Result;
