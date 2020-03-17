import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const Rooms = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="room">
      <button onClick={() => setModalIsOpen(true)}>See Rooms</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h1>Modal Title</h1>
        <p>Modal Body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default Rooms;
