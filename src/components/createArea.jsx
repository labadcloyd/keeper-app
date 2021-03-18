import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={props.value}
          onChange={props.handleInput}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.value}
          onChange={props.handleInput}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
