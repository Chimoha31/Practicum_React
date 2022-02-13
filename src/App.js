import React, { useState } from "react";
import List from "./List";
import Form from "./Form";

function App() {
  const [description, setDescription] = useState("Before click");
  const [tab, setTab] = useState("list");

  const changeDescription = () => {
    setDescription("After click");
  };
  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('list')}>List</li>
          <li onClick={() => setTab('form')}>Form</li>
        </ul>
      </header>

      <hr />
      {description}
      {tab === "list" ? <List title="List of languages" /> : <Form />}
      <button onClick={changeDescription}>BUTTON</button>
    </div>
  );
}

export default App;
