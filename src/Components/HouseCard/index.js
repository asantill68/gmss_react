import React from "react";
import styles from "./styles.css";
import RoomCard from "../Modal";

const HouseCard = props => {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <div className="row">
        <div className="column">
          <h1>{props.name}</h1>
          <h2>Rooms from {props.price}</h2>
          <RoomCard />
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
