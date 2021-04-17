import React from 'react';
import PropTypes from 'prop-types';

import useTotalCount from '../hooks/useTotalCount';

function CatchPhrase({ tagName, className, style }) {
  const totalCount = useTotalCount();

  const Tag = tagName;

  return (
    <Tag
      className={className}
      style={style}
    >
      {`Start a battle between our ${totalCount.user} champions,`}
      <br />
      {`and their ${totalCount.org} clans on GitHub`}
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
