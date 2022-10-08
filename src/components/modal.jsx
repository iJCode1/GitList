import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Overlay from './Overlay';
import InputText from "./Input-text";
import { ButtonContrast } from "./Button";

const ModalContentStyled = styled.form`
  background: var(--bg);
  color: var(--white);
  padding: 1.5rem;
  border-radius: .5rem;
  position: fixed;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  transform: translateX(-50%) translateY(-50%);
  inline-size: 24rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .modal-title{
    font: var(--headline2-semi-bold);
    margin: 0;
  }
`;

function ModalContent() {
  const form = useRef(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userName = formData.get('username');
    navigate(`/${userName}`);
  }

  return (
    <Overlay>
      <ModalContentStyled ref={form} onSubmit={handleSubmit}>
        <h2 className="modal-title">Ingresa el username a buscar</h2>
        <InputText type="search" placeholder="Username" name="username" />
        <ButtonContrast type="submit" text="Buscar" />
      </ModalContentStyled>
    </Overlay>
  );
}

export default ModalContent;