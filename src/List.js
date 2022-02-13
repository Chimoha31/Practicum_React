import { findAllByTitle } from "@testing-library/react";
import React from "react";

const LANGUAGES = ["JavaScript", "C++", "PHP", "Java", "Ruby", "GO"];

const List = (props) => {
  const title = props.title;
  return (
    <div>
      <h4>{title}</h4>
      {LANGUAGES.map((lang, index) => {
        return <div key={index}>{lang}</div>;
      })}
    </div>
  );
};

export default List;
