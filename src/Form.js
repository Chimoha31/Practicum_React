import React, { useState } from "react";
import { Button } from "./compoents/button";
import { TabBodyContainer } from "./compoents/tab-body-container";
import FormModal from "./FormModal";
import Hint from './Hint';
import styled from "styled-components";

const Form = (props) => {
  // props
  const onAddLang = props.onAddLang;

  // useState
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);

  // event系
  const submitForm = (e) => {
    e.preventDefault();
    setShowModal(true);
    // onAddLang(text);
  };

  const changeTextHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <TabBodyContainer title="Add new language">
      <form onSubmit={submitForm}>
        <div>
          <Label>Language</Label>
          <Input type="text" value={text} onChange={changeTextHandler} />
          <Hint />
        </div>
        <ButtonContainer>
          <FormButton>Add</FormButton>
        </ButtonContainer>
      </form>
      {showModal && 
        <FormModal
          confirm={() => onAddLang(text)}
          cancel={() => setShowModal(false)}
        />
      }
    </TabBodyContainer>
  );
};

const Label = styled.label`
  display: flex;
  color: #757575;
  font-size: 14px;
  font-weight: bold;
`;
const Input = styled.input`
  border-radius: 3px;
  padding: 4px 8px;
  border: 1px solid black;
`;
const ButtonContainer = styled.div`
  margin-top: 24px;
`;
const FormButton = styled(Button)`
  width: 120px;
  background-color: pink;
`;

export default Form;
