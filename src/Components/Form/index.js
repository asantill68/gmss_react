import React from "react";
import styles from "./styles.css";

const Form = props => {
  return (
    <div className="cont">
      <h1>Register Your Home</h1>
      <form action="signUp">
        <label htmlFor="uName"><h2>UserName:</h2></label>
        <input type="text" />
        <br />
        <label htmlFor="houseName">House Name: </label>
        <input type="text" />
        <br />
        <label htmlFor="image">Image of Home: </label>
        <input type="url" />
        <br />
        <label htmlFor="room#">Number of Rooms: </label>
        <input type="number" />
        <br />
        <label htmlFor="number">Price per Room: </label>
        <input type="number" />
        <br />
        <label htmlFor="image">Image of Room 01: </label>
        <input type="url" />
        <br />
        <label htmlFor="image">Image of Room 02: </label>
        <input type="url" />
        <br />
        <label htmlFor="image">Image of Room 03: </label>
        <input type="url" />
        <br />
        <label htmlFor="image">Image of Room 04: </label>
        <input type="url" />
        <br />
        <label htmlFor="image">Image of Room 05: </label>
        <input type="url" />
        <br />
      </form>
    </div>
  );
};

export default Form;
