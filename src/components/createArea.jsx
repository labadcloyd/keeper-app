import React, { useState } from "react";

function CreateArea(props) {
  let [notes, setNote] = useState([{ title: "", content: "" }]);
  function handleChange(event) {
    let { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(notes);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={notes.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={notes.content}
          onChange={handleChange}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
