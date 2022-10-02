import styled from 'styled-components';
import props from './profile-data.js';
import Button from './Button';

const ProfileStyled = styled.div`
  grid-area: profile;

  .avatar{
    border: 1px solid var(--grey-2);
    box-sizing: border-box;
    border-radius: 50%;
    overflow: hidden;
    margin-block-end: 1.5rem;
  }

  .name{
    margin: 0;
    color: var(--white);
    font: var(--headline1);
    margin-block-end: .5rem;
  }

  .username{
    font: var(--headline2-ligth);
    color: var(--grey-2);
    margin-block-start: .5rem;
    margin-block-end: 1.5rem;
  }

  .buttons{
    display: flex;
    gap: .5rem;
    margin-block-end: 1.5rem;
  }

  .bio{
    color: var(--grey-2);
    margin: 0;
    margin-block-end: 1rem;
  }

  .followers{
    display: flex;
    gap: .5rem;
    font: var(--body2-regular);
    margin-block: 1rem;
  }

  .stars{
    margin-block-end: 1.5rem;  
  }

  .location{
    margin: 0;
    margin-block-end: 1rem;
  }

  .website{
    margin-block: 1rem;
  }

  .twitter{
    margin-block: 1rem;
  }

  .info{
    font: var(--body2-regular);
    color: var(--grey-2);
    display: flex;
    text-decoration: none;
  }

  a.info:hover{
    text-decoration: underline;
  }

  .number{
    font: var(--body2-semi-bold);
    color: var(--grey-2);
  }

  .custom{
    border: 1px solid red;
  }
`;

function Profile() {
  const { avatar_url, name, login, location, bio, followers, following, blog, twitter_username } = props;
  return (
    <ProfileStyled>
      <img className='avatar' src={avatar_url} alt={`Foto de perfil de ${name}`} width="278" height="278" />
      <h2 className="name">{name}</h2>
      <p className="username">{login}</p>
      <div className="buttons">
        <Button
          text="Follow"
          link="#"
          // className="custom"
        />
        <Button
          text="Sponsor"
          icon={<i>🤩</i>}
        />
      </div>
      <p className="bio">
        {bio}
      </p>
      <p className="followers">
        • <span className="number">{followers}</span> Followers • <span className="number">{following}</span> Following
      </p>
      <p className="stars">
        • <span className="number">40</span>
      </p>
      <p className="location info">
        • {location}
      </p>
      <a href={blog} className="website info" target="_blank" rel="noreferrer">
        • {blog}
      </a>
      <a href={`https://twitter.com/${twitter_username}`} className="twitter info" target="_blank" rel="noreferrer">
        • @{twitter_username}
      </a>
    </ProfileStyled>
  )
}

export default Profile;