import React, { useState } from "react";

function App() {
  const [ismouseOver, setmouseOver] = useState(false);
  const [name, setName] = useState("");
  const [headingText, setheadingText] = useState("");

  function changeEvent() {
    setName(event.target.value);
  }
  function clickEvent(event) {
    setheadingText(name);
    event.preventDefault();
  }
  function onOver() {
    setmouseOver(true);
  }
  function onOut() {
    setmouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={clickEvent}>
        <input
          onChange={changeEvent}
          type="text"
          placeholder="What's your name?"
        />
        <button
          style={{ backgroundColor: ismouseOver ? "black" : "white" }}
          onMouseOver={onOver}
          onMouseOut={onOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
