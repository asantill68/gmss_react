import React from "react";

const styles = {
  img: {
    height: "300px",
    width: "400px"
  }
};

const House2 = props => {
  return (
    <div className="house02">
      <img style={styles.img} src="./img/house2.png" alt="Summer Shack" />
      <a href="">
        <h1 className="houseName">Summer Shack</h1>
      </a>
    </div>
  );
};

export default House2;
