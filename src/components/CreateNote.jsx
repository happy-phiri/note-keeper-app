import React, { useId } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

const CreateNote = ({
  newNote,
  setNewNote,
  setList,
  setShowForm,
  editing,
  setEditing,
}) => {
  //GENERATE UNIQUE ID
  const id = useId();
  const randomNumber = Math.floor(Math.random() * 10000);

  //HANDLES USER INPUT
  const handleChange = (e) => {
    setNewNote((prevState) => {
      return {
        ...prevState,
        id: `${id}-${randomNumber}`,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString("en-US"),
        [e.target.name]: e.target.value,
      };
    });
  };

  //HANDLES FORM SUBMIT FOR NEW AND EDITED NOTES
  const handleSubmit = (e) => {
    e.preventDefault();
    setList((prevState) => [newNote, ...prevState]);
    setShowForm(false);
    setEditing(false);
    setNewNote({
      id: "",
      title: "",
      body: "",
      date: "",
      time: "",
    });
  };

  //CLOSE FORM AND RESET VALUES
  const handleCancelForm = () => {
    setShowForm(false);
    setNewNote({
      id: "",
      title: "",
      body: "",
      date: "",
    });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newNote.title}
          onChange={handleChange}
          placeholder="Title"
          autoComplete="off"
        />

        <textarea
          name="body"
          value={newNote.body}
          onChange={handleChange}
          placeholder="Content"
          cols="30"
          rows="7"></textarea>

        <div className="form-btns">
          <button
            className="btn"
            disabled={!newNote.title && !newNote.body & true}>
            <FontAwesomeIcon icon={faPlus} size="2xl" />
          </button>

          {!editing && (
            <button className=" cancel-btn" onClick={() => handleCancelForm()}>
              Close <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateNote;
