import React, { useEffect } from "react";
import { TabBodyContainer } from "./compoents/tab-body-container";
import styled from "styled-components";

const List = (props) => {
  const langs = props.langs;
  
  useEffect(() => {
    console.log("List.js: useEffect");

    return () => {
      console.log("List.js: useEffect: unmount");
    };
  });

  return (
    <TabBodyContainer title="List of languages">
      <div>
        {langs.map((lang, index) => {
          return <ListItem key={index}>{lang}</ListItem>;
        })}
      </div>
    </TabBodyContainer>
  );
};

const Container = styled.div`
  padding: 12px 64px;
`;

const ListItem = styled.div`
  padding: 8px 16px;

  &:nth-child(n + 2) {
    border-top: 1px solid #d9dbde;
  }
`;

export default List;
