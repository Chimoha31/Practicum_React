import React from "react";

const List = (props) => {
  const langs = props.langs;
  return (
    <div>
      {langs.map((lang, index) => {
        return <div key={index}>{lang}</div>;
      })}
    </div>
  );
};

export default List;
