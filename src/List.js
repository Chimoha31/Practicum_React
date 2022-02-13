import { findAllByTitle } from "@testing-library/react";
import React from "react";

const LANGUAGES = ["JavaScript", "C++", "PHP", "Java", "Ruby", "GO"];

const List = () => {

  return (
    <div>
      {LANGUAGES.map((lang, index) => {
        return <div key={index}>{lang}</div>;
      })}
    </div>
  );
};

export default List;
