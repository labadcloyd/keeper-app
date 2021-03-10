import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";

let notesArray = [
  { id: 1, title: "something", content: "hello world" },
  { id: 2, title: "another thing", content: "hello another world" }
];
function App() {
  return (
    <div>
      <Header />
      {notesArray.map(Note)}
      <Footer />
    </div>
  );
}
export default App;
