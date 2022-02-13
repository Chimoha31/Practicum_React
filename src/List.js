import { findAllByTitle } from "@testing-library/react";
import React from "react";

const List = (props) => {
  const title = props.title;
  return (
    <div>
      <h4>{title}</h4>
      <div>This is List.</div>
    </div>
  );
};

export default List;
