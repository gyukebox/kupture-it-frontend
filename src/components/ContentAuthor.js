import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const ContentAuthorWrapper = styled(Card)`
  width: 100%;
  margin: 10px;
  border: 0;
`;

const ContentAuthorName = styled(Card.Title)`
  font-weight: bold;
  text-align: center;
`;

export default function ContentAuthor({ author }) {
  return (
    <ContentAuthorWrapper>
      <Card.Img variant="top" src="https://picsum.photos/200" />
      <ContentAuthorName>{author}</ContentAuthorName>
    </ContentAuthorWrapper>
  );
}

ContentAuthor.propTypes = {
  author: PropTypes.string.isRequired,
};
