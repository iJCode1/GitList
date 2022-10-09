import styled from 'styled-components';
import { isValidElement } from 'react';

const ButtonStyled = styled.button`
  background: var(--buttonc);
  font: var(--button);
  color: var(--white);
  min-inline-size: 8.4375rem;
  padding-block: .25rem;
  display: inline-flex;
  gap: .5rem;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--grey);
  border-radius: .5rem;
  text-decoration: none;
  cursor: pointer;
    &:hover{
      background-color: var(--white);
      color: var(--grey);

      @media screen and (prefers-color-scheme: light){
        background-color: #c5ced7;
        color: var(--buttonc);
      }
    }
`;

function Button({ text, icon, link, className }) {
  const component = link ? 'a' : 'button';
  let iconComponent = null;

  if (icon) {
    if (isValidElement(icon)) {
      iconComponent = icon;
    }
  }
  return (
    <ButtonStyled as={component} href={link} target="_blank" rel="noreferrer" className={className}>
      {iconComponent}
      {text}
    </ButtonStyled>
  )
}

export const ButtonContrast = styled(Button)`
  background: var(--white);
  color: var(--buttonc);
  &:hover{
    color: var(--white);
    background: var(--buttonc);
  }
`;

export const ButtonRounded = styled(Button)`
  min-inline-size: initial;
  border-radius: 50%;
  padding: .75rem;
  border: 2px solid var(--grey-1);
  &:hover{
    background: var(--buttonc);
  }
  &:active{
    transform: scale(.8);
  }

  @media screen and (prefers-color-scheme: light){
    border: 1px solid var(--grey);
  }
`;

export default Button;