import React, { useEffect, useState } from 'react';

function CatchPhrase() {
  const [userCount, setUserCount] = useState();
  const [orgCount, setOrgCount] = useState();

  useEffect(() => {
    fetch('https://api.github.com/search/users?q=type%3Auser')
      .then((response) => response.json())
      .then((data) => {
        setUserCount(data.total_count);
      });
    fetch('https://api.github.com/search/users?q=type%3Aorg')
      .then((response) => response.json())
      .then((data) => {
        setOrgCount(data.total_count);
      });
  }, []);

  return (
    <p>
      {`Start a battle between our ${userCount} champions,`}
      <br />
      {`and their ${orgCount} clans`}
    </p>
  );
}

export default CatchPhrase;
