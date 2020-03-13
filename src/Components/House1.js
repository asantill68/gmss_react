import React from "react";

const styles = {
  img: {
    height: "300px",
    width: "400px"
  },
  house: {
    textalign: "center",
    color: "rgb(15, 15, 109)"
  },
  h1: {
    textalign: "center"
  }
};

const House1 = props => {
  return (
    <div style={styles.house}>
      <img style={styles.img} src="./img/house1.png" alt="Pool House" />
      <a href="#">
        <h1 style={styles.h1}>Pool House</h1>
      </a>
    </div>
  );
};

export default House1;
