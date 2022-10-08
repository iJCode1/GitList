import styled from 'styled-components';

const LayoutStyled = styled.main`
    padding-block-start: 2.5rem;
    min-block-size: 100vh;
    margin: auto;
    padding-inline: 1.25rem;
    max-inline-size: 75rem;
  @media screen and (min-width: 768px){
    display: grid;
    column-gap: 2rem;
    grid-template-areas: "profile filters" "profile repo-list";
    grid-template-columns: 17.375rem 1fr;
    grid-template-rows: auto 1fr;
  }
`;

function Layout({ children }) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
  );
}

export default Layout;