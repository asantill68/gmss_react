import React from "react";

const styles = {
  img: {
    height: "300px",
    width: "400px"
  }
};

const House3 = props => {
  return (
    <div className="house03">
      <img style={styles.img} src="./img/house3.png" alt="Country Cottage" />
      <a href="">
        <h1 className="houseName">Country Cottage</h1>
      </a>
    </div>
  );
};

export default House3;
