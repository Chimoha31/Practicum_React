import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components";

const Hint = () => {
  const [isFocus, setIsFocus] = useState(false);

  const ref = useRef(null);

 useEffect(() => {
    if(ref.current) ref.current.focus();
  });

  // const clickHandler = () => {
  //   isFocus ? setIsFocus(false) : setIsFocus(true);
  // }

  return (
    <HintContainer>
      {/* <HintInner onClick={clickHandler}>?</HintInner> */}
      <HintInner onClick={() => setIsFocus(true)}>?</HintInner>
      {isFocus && <PopupContainer ref={ref} onBlur={() => setIsFocus(false)} tabIndex={0}>Name of language</PopupContainer>}
    </HintContainer>//refを使わないとonBlurだけでは、空白をクリックした時にpopupが消えない
  );
};

const HintContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin-left: 12px;
`;

const HintInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #757575;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const PopupContainer = styled.div`
  position: absolute;
  left:88%;
  bottom: 12px;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px;
  width: 140px;
`

export default Hint;
