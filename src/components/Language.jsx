import styled from 'styled-components';

const LanguageStyled = styled.div`
  font: var(--caption-regular);
  display: flex;
  align-items: center;
  gap: .5rem;
  &:before{
    background: ${({color}) => color};
    content: '';
    block-size: 1rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }
`;

const languages = {
  javascript: {
    color: "#f1e05a"
  },

  php: {
    color: "#4F5D95"
  },

  scss: {
    color: "#c6538c"
  },

  css: {
    color: "#563d7c"
  },

  html: {
    color: "#e34c26"
  },

  dart: {
    color: "#00B4AB"
  },

  java: {
    color: "#b07219"
  },

  python: {
    color: "#3572A5"
  },

  prolog: {
    color: "#74283c"
  }
}

function Language({ language }) {
  const languageFormatted = language.toLowerCase();
  const color = languages[languageFormatted] ? languages[languageFormatted].color : 'white';
  return (
    <LanguageStyled color={color}>
      {language}
    </LanguageStyled>
  );
}

export default Language;