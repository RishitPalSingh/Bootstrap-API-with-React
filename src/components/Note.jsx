import React from "react";


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>
        {props.content}
        {props.onDelete && <button onClick={handleClick}>Readmore</button>}{" "}
      </p>
    </div>
  );
}

export default Note;
