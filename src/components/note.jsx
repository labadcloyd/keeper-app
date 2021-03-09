import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
function noteCreator(note) {
  return <Note key={note.id} title={note.title} content={note.content} />;
}
export default Note;
export { noteCreator };
