import styled from 'styled-components';
import Button from './Button';
import Icon from './icons';
import { useState, useEffect } from 'react';

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

  /* .stars{
    margin-block-end: 1.5rem;  
  } */

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
    gap: .5rem;
    align-items: center;
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

function Profile(props) {
  const { html_url, avatar_url, name, login, location, bio, followers, following, blog, twitter_username } = props;

  const [nombre, setNombre] = useState(name);

  return (
    <ProfileStyled>
      <img className='avatar' src={avatar_url} alt={`Foto de perfil de ${name}`} width="278" height="278" />
      <h2 className="name">{name}</h2>
      <p className="username">{login}</p>
      <div className="buttons">
        <Button
          text="Follow"
          link={html_url}
        // className="custom"
        />
        <Button
          text="Sponsor"
          icon={<Icon
            icon="heart"
            size="24"
            color="var(--pink)"
          />}
        />
      </div>

      {
        bio
          ? <p className="bio">
            {bio}
          </p>
          : null
      }

      <p className="followers">
        <Icon icon="user" color="var(--grey)" size="20" />
        <span className="number">{followers}</span> Followers • <span className="number">{following}</span> Following
      </p>

      {/* <p className="stars">
        • <span className="number">40</span>
      </p> */}

      {
        location
          ? <p className="location info">
            <Icon icon="location" color="var(--grey)" size="20"></Icon>
            {location}
          </p>
          : null
      }

      {
        blog
          ? <a href={blog} className="website info" target="_blank" rel="noreferrer">
            <Icon icon="link" color="var(--grey)" size="20"></Icon>
            {blog}
          </a>
          : null
      }

      {
        twitter_username
          ? <a href={`https://twitter.com/${twitter_username}`} className="twitter info" target="_blank" rel="noreferrer">
            <Icon icon="twitter" color="var(--grey)" size="20" />
            @{twitter_username}
          </a>
          : null
      }

    </ProfileStyled>
  )
}

export default Profile;