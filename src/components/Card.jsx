import React, { useState } from 'react';

function Card() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState();

  if (user != null) {
    return (
      <>
        <img src={user.avatar_url} alt={user.login} />
        <button
          type="button"
          onClick={() => setUser(null)}
        >
          Change your champion
        </button>
      </>
    );
  }
  return (
    <>
      <p>Who is your champion?</p>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          fetch(`https://api.github.com/users/${username}`).then(
            (response) => response.json(),
          ).then(
            (data) => setUser(data),
          );
        }}
      >
        📞
      </button>
    </>
  );
}

export default Card;
