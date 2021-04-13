import React, { useEffect, useState } from 'react';

import Card from '../components/Card';

function Home() {
  const [totalCount, setTotalCount] = useState();

  useEffect(() => {
    fetch('https://api.github.com/search/users?q=type%3Auser')
      .then((response) => response.json())
      .then((data) => {
        setTotalCount(data.total_count);
      });
  }, []);

  return (
    <>
      <p>
        Start a battle between our
        {' '}
        {totalCount}
        {' '}
        champions
      </p>
      <Card />
      <Card />
    </>
  );
}

export default Home;
