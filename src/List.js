import React, {useEffect} from "react";

const List = (props) => {
  useEffect(() => {
    console.log("List.js: useEffect");

    return () => {
      console.log("List.js: useEffect: unmount")
    }
  });

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
