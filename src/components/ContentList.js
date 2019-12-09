/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Content from './Content';

// TODO: connect to redux action

function ContentList({ contents }) {
  return (
    <div id="contents-list" className="wrapper">
      {contents.map(({ id, ...detail }) => (
        <Content key={id} id={id} {...detail} />
      ))}
    </div>
  );
}

ContentList.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default ContentList;
