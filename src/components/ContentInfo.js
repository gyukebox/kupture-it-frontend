import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import ContentAuthor from './ContentAuthor';

const ContentInfoWrapper = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// TODO: Add PropTypes

export default function ContentInfo({ author, text, image }) {
  return (
    <ContentInfoWrapper lg={8} sm={12}>
      <ContentAuthor author={author} />
      <div>
        <p>{text}</p>
      </div>
    </ContentInfoWrapper>
  );
}
