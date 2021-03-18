import React, { useState } from "react";

function Note(props) {
  let [note, setNote] = useState([{ title: "cloyd", content: "abad" }]);

  console.log(note, note[0].title);
  return (
    <div className="note" key={props.key}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="delete">delete</button>
    </div>
  );
}
export default Note;
