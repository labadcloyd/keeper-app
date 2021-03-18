import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./createArea";

let notesArray = [
  { key: 1, title: "something", content: "hello world" },
  { key: 2, title: "another thing", content: "hello another world" }
];
function App() {
  let [notes, setNote] = useState([{}]);

  function addNote(event) {}
  return (
    <div>
      <Header />
      <CreateArea />
      <div className="notesContainer">{notesArray.map(Note)}</div>

      <Footer />
    </div>
  );
}
export default App;
