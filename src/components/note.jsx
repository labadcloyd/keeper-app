import React, { useState } from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="delete">delete</button>
    </div>
  );
}
export default Note;
