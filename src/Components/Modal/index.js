import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./styles.css";
// import RoomCard from "./RoomCard";
//import homes from "../homes.json";

Modal.setAppElement("#root");
const RoomCard = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="room">
      <button onClick={() => setModalIsOpen(true)}>See Rooms</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h1>TEST</h1>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default RoomCard;
