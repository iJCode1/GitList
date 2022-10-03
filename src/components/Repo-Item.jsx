import styled from 'styled-components';

const RepoItemStyled = styled.div`
  border: 1px solid red;
`;

function RepoItem({ name }) {
  return (
    <RepoItemStyled>
      {name}
    </RepoItemStyled>
  );
}

export default RepoItem;