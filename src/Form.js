import React, { useState } from "react";
import {Button} from './compoents/button';
import styled from 'styled-components';

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
    <Container>
      <h4>Add new language</h4>
      <form onSubmit={submitForm}>
        <div>
          <Label>Language</Label>
          <Input type="text" value={text} onChange={changeTextHandler} />
        </div>
        <ButtonContainer>
          <FormButton>Add</FormButton>
        </ButtonContainer>
      </form>
    </Container>
  );
};

const Container = styled.div`
  padding: 12px 64px;
`
const Label = styled.label`
  display: flex;
  color:#757575;
  font-size: 14px;
  font-weight: bold;
`
const Input = styled.input`
  border-radius: 3px;
  padding: 4px 8px;
  border: 1px solid black;
`
const ButtonContainer = styled.div`
margin-top: 24px;
`
const FormButton = styled(Button)`
  width: 120px;
  background-color: pink;
`

export default Form;
