import styled from "styled-components";

const SelectorStyled = styled.select`
  font: var(--body2-semi-bold);
  background: var(--buttonc);
  color: var(--white);
  padding: .5rem 1rem;
  padding-block-end: .5rem;
  border: none;
  border-radius: .5rem;
  &:hover{
    background: #4F545A;
  }
`;

function Selector({ children, setLanguage }) {

  function handleLanguage(e) {
    setLanguage(e.target.value);
  }

  return (
    <SelectorStyled onChange={handleLanguage}>
      {children}
    </SelectorStyled>
  );
}

export default Selector;