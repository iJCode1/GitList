import styled from 'styled-components';
import Language from './Language';
import Icon from './icons';

const RepoItemStyled = styled.div`
  padding-block-end: 1rem;
  margin-block-end: 2rem;
  border-block-end: 1px solid var(--grey);

  &:last-child{
    border-block-end: none;
  }

  .repo-title{
    display: flex;
    gap: 1rem;
    margin: 0;
    margin-block-end: 1rem;
    a{
      color: var(--primary);
      text-decoration: none;
      font: var(--headline2-semi-bold);
    }
  }

  .repo-type{
    font: var(--caption-regular);
    color: var(--grey);
    padding: .125rem .5rem;
    border: 1px solid var(--grey);
    border-radius: .5rem;
  }

  .repo-description{
    font: var(--body2-regular);
    color: var(--grey);
    margin: 0;
  }

  .repo-topics{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: .25rem;
    margin-block-start: 1rem;
    padding-block-start: .5rem;
  }

  .repo-topic{
    background: #15223A;
    color: var(--primary);
    padding: .25rem .75rem;
    border-radius: 2.375rem;
    font: var(--caption-medium);
  }
  
  .repo-info{
    margin-block-start: 1rem;
    display: flex;
    font: var(--caption-regular);
    gap: 1rem;
    & span{
      display: flex;
      gap: .5rem;
      align-items: center;
      color: var(--grey-2)
    }
  }
`;

function RepoItem(props) {
  const updatedAt = new Date(props.updated_at);
  const today = new Date();
  const diffMilliSeconds = updatedAt - today;
  const diffDays = Math.ceil(diffMilliSeconds / (1000 * 60 * 60 * 24));
  const timeAgo = new Intl.RelativeTimeFormat('es').format(diffDays, 'days')

  return (
    <RepoItemStyled>
      <h3 className='repo-title'>
        <a href={props.html_url} target="_blank" rel="noreferrer">
          {props.name}
        </a>
        {
          !props.private
            ? <span className='repo-type'>Public</span>
            : null
        }
      </h3>
      {
        props.description
          ? <p className='repo-description'>
            {props.description}
          </p>
          : null
      }
      {
        props.topics.length
          ? <div className='repo-topics'>
            {
              props.topics.map(topic => <span className='repo-topic'>{topic}</span>)
            }
          </div>
          : null
      }
      <div className="repo-info">
        {
          props.language ? <Language language={props.language} /> : null
        }
        <span className="repo-star">
          <Icon icon="star" />
          {props.stargazers_count}
        </span>
        <span className='repo-fork'>
          <Icon icon="branch" />
          {props.forks_count}
        </span>
        <span>
          {timeAgo}
        </span>
      </div>
    </RepoItemStyled>
  );
}

export default RepoItem;