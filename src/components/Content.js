import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import ContentInfo from './ContentInfo';
import ContentLocation from './ContentLocation';

const ContentWrapper = styled(Row)`
  width: 95%;
  min-height: 300px;
  margin: 1% auto;
  display: flex;
  justify-content: center;
  border: 1px solid #ced4da;
  border-radius: 8px;
`;

// TODO: Add PropTypes

export default function Content({
  id,
  author,
  text,
  image,
  latitude,
  longitude,
}) {
  return (
    <ContentWrapper>
      <ContentInfo author={author} text={text} image={image} />
      <Col lg={4} sm={12}>
        <ContentLocation
          contentId={id}
          latitude={latitude}
          longitude={longitude}
        />
      </Col>
    </ContentWrapper>
  );
}
