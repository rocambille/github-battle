import { useState, useEffect } from 'react';

function useTotalCount() {
  const [totalCount, setTotalCount] = useState({});
  useEffect(() => {
    console.log('useTotalCount fetching');
    ['user', 'org'].forEach((type) => {
      fetch(`https://api.github.com/search/users?q=type%3A${type}`)
        .then((response) => response.json())
        .then((data) => {
          setTotalCount((previousTotalCount) => ({
            ...previousTotalCount,
            [type]: data.total_count,
          }));
        });
    });
  }, []);

  return totalCount;
}

export default useTotalCount;
