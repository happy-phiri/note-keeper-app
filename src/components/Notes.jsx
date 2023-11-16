import React from "react";
import Note from "./Note";

const Notes = ({
  setNewNote,
  list,
  handleModalToggle,
  handleDeleteNote,
  handleEditNote,
}) => {
  return (
    <div className="container">
      <section className="notes-container">
        {list &&
          list.map((note) => {
            return (
              <div key={list.indexOf(note)}>
                {note.title && note.body && (
                  <Note
                    note={note}
                    handleModalToggle={handleModalToggle}
                    handleDeleteNote={handleDeleteNote}
                    handleEditNote={handleEditNote}
                    setNewNote={setNewNote}
                  />
                )}
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Notes;
