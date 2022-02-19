import React from 'rect';
import {Modal} from './compoents/Modal';
import {Button} from './compoents/button';
import styled from 'styled-components';

export const FormModal = ( {confirm, cancel} ) => {
  return(
    <Modal>
      <div>Do you really add it?</div>
      <ButtonWrapper>
        <Button onClick={cancel}>Cancel</Button>
        <Button onClick={confirm}>OK</Button>
      </ButtonWrapper>
    </Modal>
  )
}

const Container = styled.div`
  width: 240px;
  border-radius: 10px;
  padding: 24px 36px;
  background-color: #fff;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-betwwen;
  margin-top: 24px;
`