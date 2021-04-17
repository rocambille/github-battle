import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function CatchPhrase({ tagName, className, style }) {
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

  const Tag = tagName;

  return (
    <Tag
      className={className}
      style={style}
    >
      {`Start a battle between our ${userCount} champions,`}
      <br />
      {`and their ${orgCount} clans on GitHub`}
    </Tag>
  );
}

CatchPhrase.propTypes = {
  tagName: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

CatchPhrase.defaultProps = {
  className: '',
  style: {},
};

export default CatchPhrase;
