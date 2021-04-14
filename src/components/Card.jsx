import React, { useState } from 'react';

import Search from './Search';

function Card() {
  const [user, setUser] = useState();

  const fetchUsername = (username) => {
    fetch(`https://api.github.com/users/${username}`).then(
      (response) => response.json(),
    ).then(
      (data) => setUser(data),
    );
  };

  if (user == null) {
    return (
      <>
        <p>Who is your champion?</p>
        <Search onTextChange={fetchUsername} buttonText="📞" />
      </>
    );
  }

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

export default Card;
