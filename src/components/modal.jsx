import { useRef } from "react";
import { useNavigate } from 'react-router-dom';

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
    <form ref={form} onSubmit={handleSubmit}>
      <h2>Ingresa el username a buscar</h2>
      <input type="search" placeholder="Username" name="username"/>
      <button type="submit">Buscar</button>
    </form>
  );
}

export default ModalContent;