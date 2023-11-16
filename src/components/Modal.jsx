import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Modal = ({ setModal, activeNote, handleDeleteNote, handleEditNote }) => {
  return (
    <div className="modal">
      <button className="close-btn" onClick={() => setModal(false)}>
        <FontAwesomeIcon icon={faXmark} size="2xl" />
      </button>

      <div>
        <h3>{activeNote.title}</h3>
        <p>{activeNote.body}</p>
      </div>

      <div className="modal-btns">
        <FontAwesomeIcon
          icon={faPenToSquare}
          size="lg"
          className="edit"
          onClick={() =>
            handleEditNote(activeNote.id, activeNote.title, activeNote.body)
          }
        />
        <FontAwesomeIcon
          icon={faTrash}
          size="lg"
          className="delete"
          onClick={() => handleDeleteNote(activeNote.id)}
        />
      </div>
      {activeNote.date && activeNote.time && (
        <pre>
          Created on <span>{activeNote.date}</span> at
          <span> {activeNote.time}</span>
        </pre>
      )}
    </div>
  );
};

export default Modal;
