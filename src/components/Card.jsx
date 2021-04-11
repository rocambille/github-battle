import React, { useState } from 'react';

function Card() {
  const [username, setUsername] = useState('');

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
          alert(`let's call ${username} using GitHub API`);
        }}
      >
        📞
      </button>
    </>
  );
}

export default Card;
