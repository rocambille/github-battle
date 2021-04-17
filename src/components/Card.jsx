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

  return (
    <section>
      {user == null ? (
        <>
          <h2>Who is your champion?</h2>
          <Search handleQuery={fetchUsername} buttonText="📞" />
        </>
      ) : (
        <>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} />
          <button
            type="button"
            onClick={() => setUser(null)}
          >
            Change your champion
          </button>
        </>
      )}
    </section>
  );
}

export default Card;
