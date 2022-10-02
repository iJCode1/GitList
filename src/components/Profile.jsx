import styled from 'styled-components';

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
`;

function Profile() {
  return (
    <ProfileStyled>
      <img className='avatar' src="" alt="" width="278" height="278" />
      <h2 className="name">Joel Dominguez Merino</h2>
      <p className="username">iJCode1</p>
      <div className="buttons">
        <button>Follow</button>
        <button>Sponsor</button>
      </div>
      <p className="bio">
        Hola Mundo
      </p>
      <p className="followers">
        • <span className="number">29</span> Followers • <span className="number">20</span> Following
      </p>
      <p className="stars">
        • <span className="number">40</span>
      </p>
      <p className="location info">
        • Toluca
      </p>
      <a href="#" className="website info" target="_blank" rel="noreferrer">
        • https://ijcode1.com
      </a>
      <a href="#" className="twitter info" target="_blank" rel="noreferrer">
        • @iJCode1
      </a>
    </ProfileStyled>
  )
}

export default Profile;