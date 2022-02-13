import React, { useState } from "react";

const Form = (props) => {
  const onAddLang = props.onAddLang;
  const [text, setText] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    onAddLang(text);
  };

  const changeTextHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h4>Add new language</h4>
      <form onSubmit={submitForm}>
        <div>
          <input type="text" value={text} onChange={changeTextHandler} />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
