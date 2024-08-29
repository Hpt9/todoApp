import React, { useState } from "react";
import Button from "@mui/material/Button";
import "../css/NewItem.scss";
import Modal from "./Modal";

export default function NewItem({setNewItem}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Button
        className="mui-btn"
        variant="contained"
        onClick={openModal}
      >
        New Item
      </Button>
      <Modal isOpen={isOpen} onClose={closeModal} setNewItem={setNewItem}>
      </Modal>
    </div>
  );
}
