import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ContentAuthorWrapper = styled(Card)`
  width: 150px;
  margin: 10px;
  border: 0;
`;

const ContentAuthorName = styled(Card.Title)`
  font-weight: bold;
  text-align: center;
`;

export default function ContentAuthor({ author }) {
  const { user } = useSelector(state => state.users);
  const [image, setImage] = useState('https://picsum.photos/150');

  useEffect(() => {
    if (user) {
      if (user.id === author) {
        setImage(user.image);
      }
    }
  });

  return (
    <ContentAuthorWrapper>
      <Card.Img variant="top" src={image} />
      <ContentAuthorName>{author}</ContentAuthorName>
    </ContentAuthorWrapper>
  );
}

ContentAuthor.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
