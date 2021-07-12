import React from "react";
import Button from "./button";
import Modal from "./modal";

function DeleteConfirmationModal(children) {
  return (
    <Modal>
      <div className="modal">
        <div className="container">
          <Button className="sim">Sim</Button>
          <Button className="Não">Não</Button>
        </div>
        {children}
      </div>
    </Modal>
  );
}

export default DeleteConfirmationModal;
