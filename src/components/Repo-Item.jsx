import styled from 'styled-components';

const RepoItemStyled = styled.div`
  border: 2px solid purple;
  padding: 0.5rem;
  margin-block: 1rem;
  background-color: black;
  color: white;
`;

function RepoItem(props) {
  return (
    <RepoItemStyled>
      <a href={props.html_url} target="_blank" rel="noreferrer">
        {props.name}
      </a>
      {
        !props.private 
        ? <span>Public</span> 
        : null
      }
      {
        props.description 
        ? <p className='description'>
            {props.description}
          </p>
        : null
      }
      {
        props.topics.length 
        ? <div>
          {
            props.topics.map( topic => <span>{`${topic} `}</span> )
          }
        </div>
        : null
      }
    </RepoItemStyled>
  );
}

export default RepoItem;