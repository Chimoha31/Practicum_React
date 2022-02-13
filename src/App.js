import React, {useState} from "react";
import List from "./List";

function App() {
  const [description, setDescription] = useState('Before click');

  const changeDescription = () => {
    setDescription('After click')
  }
  return (
    <div>
      {description}
      <List title='List of languages'/>
      <button onClick={changeDescription}>BUTTON</button>
    </div>
  );
}

export default App;