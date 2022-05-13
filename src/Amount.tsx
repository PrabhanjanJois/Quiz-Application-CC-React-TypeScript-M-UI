import React from "react";
import Start from "./Component/Start";
import { Paper } from "@material-ui/core";
import Image from "./pixbg2.jpg";
import "./SelectDifficulty.css";

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

const Amount = () => {
  return (
    <Paper style={styles.paperContainer}>
      <div>
        <p>
          <br></br>
        </p>
        <p>
          <br></br>
        </p>
        <p>
          <br></br>
        </p>
        <p
          style={{ color: "black", textAlign: "center" }}
          className="font-fam-2"
        >
          Quiz on Category : Computer Science and Applications.
          <br></br>
        </p>

        <Start
          pageredirect="/question"
          header="Select Number Of Questions"
          option1="3"
          option2="5"
          option3="10"
        />
      </div>
    </Paper>
  );
};

export default Amount;
