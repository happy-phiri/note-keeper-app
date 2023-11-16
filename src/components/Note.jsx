import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Note = ({
  note,
  handleDeleteNote,
  handleModalToggle,
  handleEditNote,
}) => {
  return (
    <div className="card">
      <div onClick={() => handleModalToggle(note.id)} className="card-link">
        <h3>{note.title}</h3>
        <p>
          {note.body.length > 150
            ? `${note.body.substring(0, 150)} . . .`
            : note.body}
        </p>
      </div>

      <div className="card-btns">
        <FontAwesomeIcon
          icon={faPenToSquare}
          size="lg"
          className="edit"
          onClick={() => handleEditNote(note.id, note.title, note.body)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          size="lg"
          className="delete"
          onClick={() => handleDeleteNote(note.id)}
        />
      </div>
    </div>
  );
};

export default Note;
