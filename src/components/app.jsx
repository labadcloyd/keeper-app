import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import { noteCreator } from "./note";

let notesArray = [
  { key: 1, title: "something", content: "hello world" },
  { key: 2, title: "another thing", content: "hello another world" }
];
function App() {
  return (
    <div>
      <Header />
      <div className="notesContainer">{notesArray.map(noteCreator)}</div>

      <Footer />
    </div>
  );
}
export default App;
