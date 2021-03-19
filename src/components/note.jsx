import React, { useState } from "react";

function Note(props) {
  function deleteNote() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="delete" onClick={deleteNote} id={props.id}>
        delete
      </button>
    </div>
  );
}
export default Note;
