import React, { useState, useContext } from "react";
import List from "./List";
import Form from "./Form";
import Header from './Header';
import {ThemeContext} from './const/contexts/ThemeContext';
import styled from 'styled-components';
// import {Modal} from './compoents/modal';


function App({ data }) {
  const [tab, setTab] = useState("list");
  const [langs, setLangs] = useState(data);

  const [theme] = useContext(ThemeContext);

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab('list');
  }

  return (
    <Container theme={theme}>      
    <Header tab={tab} setTab={setTab} />
      {tab === "list" ? <List langs={langs}/> : <Form onAddLang={addLang} />}
      {/* modalがちゃんと効いているか見ただけ。消さないと、ずっとmodal状態 */}
      {/* <Modal /> */}
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  color: ${({theme}) => theme.color};
  background-color: ${({theme}) => theme.backgroundColor};
`

export default App;