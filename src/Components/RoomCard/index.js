import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./styles.css";
//import homes from "../homes.json";

Modal.setAppElement("#root");
const Rooms = props => {
  return (
    <div className="room">
      <button onClick={() => setModalIsOpen(true)}>See Rooms</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default Rooms;
