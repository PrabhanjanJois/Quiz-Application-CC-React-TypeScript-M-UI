import React from "react";
import Start from "./Component/Start";
import { Paper } from "@material-ui/core";
import Image from "./bg222.jpeg";
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

const SelectDifficulty = () => {
  return (
    <Paper style={styles.paperContainer}>
      <div>
        <div
          style={{ color: "black", textAlign: "center", paddingTop: "110px" }}
        >
          <h1 className="font-fam"> Quiz Application</h1>
          <form>
            <label className="label-fam" style={{ paddingTop: "20px" }}>
              Enter Your Name
            </label>
            <br />
            <input
              type="text"
              placeholder="Here_._._._._._._._._._._"
              name="firstname"
              style={{ background: "transparent" }}
              className="textbox"
            />
            <br />
            <label className="label-fam" style={{ paddingTop: "20px" }}>
              Select your Gender
            </label>
             <br />
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label> Male</label>
              <input
              type="radio"
              id="css"
              name="fav_language"
              value="CSS"
            />  <label>Female</label>
            <br />
          </form>
        </div>
        <Start
          pageredirect="/amount"
          header="Select Difficulty to start ⇓"
          option1="easy"
          option2="medium"
          option3="hard"
        />
      </div>
    </Paper>
  );
};

export default SelectDifficulty;
