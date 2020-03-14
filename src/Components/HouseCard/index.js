import React from "react";
import styles from "./styles.css";

const HouseCard = props => {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <div className="row">
        <div className="column">
          <h1>{props.name}</h1>
          <h2>Rooms: {props.rooms}</h2>
          <h2>Rent: {props.price}</h2>
          <br />
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
