import React from "react";
import { Modal } from "./compoents/modal";
import { Button } from "./compoents/button";
import styled from "styled-components";

const FormModal = ({ confirm, cancel }) => {
  return (
    <Modal>
      <Container>
        <div>Do you really add it?</div>
        <ButtonWrapper>
          <Button onClick={cancel}>Cancel</Button>
          <Button onClick={confirm}>OK</Button>
        </ButtonWrapper>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  width: 240px;
  border-radius: 10px;
  padding: 24px 36px;
  background-color: #fff;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;
export default FormModal;
