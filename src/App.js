import React, { useState } from "react";
import List from "./List";
import Form from "./Form";
import {getLanguages} from './const/languages';
import {withLoading} from './hoc/withLoading';
import Header from './Header';
// import {Modal} from './compoents/modal';


function App({ data }) {
  const [tab, setTab] = useState("list");
  const [langs, setLangs] = useState(data);

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab('list');
  }
  
  return (
    <Header tab={tab} setTab={setTab}>
      {tab === "list" ? <List langs={langs}/> : <Form onAddLang={addLang} />}
      {/* modalがちゃんと効いているか見ただけ。消さないと、ずっとmodal状態 */}
      {/* <Modal /> */}
    </Header>
  );
}

export default withLoading(App, getLanguages);
