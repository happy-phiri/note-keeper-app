import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import CreateNote from "./components/CreateNote";
import Notes from "./components/Notes";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [newNote, setNewNote] = useState({
    id: "",
    title: "",
    body: "",
    date: "",
    time: "",
  });
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const [modal, setModal] = useState(false);
  //CURRENT NOTE BEING SHOWN IN THE MODAL
  const [activeNote, setActiveNote] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);

  //SAVE NOTES TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  // TOGGLE MODAL ON AND OFF SCREEN
  const handleModalToggle = (id) => {
    setActiveNote(list.find((note) => note.id === id));
    setModal(true);
  };

  // EDIT NOTE
  const handleEditNote = (id, title, body) => {
    const editedNote = list.find((note) => note.id === id);
    const updatedList = list.filter((note) => note.id !== editedNote.id);

    setNewNote({
      id: editedNote.id,
      title: title,
      body: body,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString("en-US"),
    });

    setList([...updatedList, newNote]);
    setShowForm(true);
    setModal(false);
    setEditing(true);
  };

  //DELETE NOTE
  const handleDeleteNote = (id) => {
    setList(list.filter((note) => note.id !== id));
    setModal(false);
  };

  return (
    <div className="app">
      <nav>
        <div className="container">
          <FontAwesomeIcon icon={faBookmark} /> Note Keeper
        </div>
      </nav>

      <main className="container">
        {showForm ? (
          <CreateNote
            newNote={newNote}
            setNewNote={setNewNote}
            setList={setList}
            setShowForm={setShowForm}
            editing={editing}
            setEditing={setEditing}
          />
        ) : (
          <div className="container new-note-container">
            <h3>Add New Note</h3>
            <button className="btn" onClick={() => setShowForm(true)}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        )}

        <Notes
          newNote={newNote}
          setNewNote={setNewNote}
          list={list}
          setList={setList}
          handleModalToggle={handleModalToggle}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
        />
      </main>

      {/* MODAL */}
      <div className={modal ? "modal-backdrop" : ""}>
        {modal && (
          <Modal
            setModal={setModal}
            activeNote={activeNote}
            handleEditNote={handleEditNote}
            handleDeleteNote={handleDeleteNote}
          />
        )}
      </div>

      <footer>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
        <div className="social-icons">
          <a className="icon" href="https://twitter.com/hpy_dev">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/happy-phiri-91b0991b5/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>

          <a className="icon" href="https://web.facebook.com/hpy.phiri/">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
