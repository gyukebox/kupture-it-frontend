import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import SearchArea from './SearchArea';
import ContentList from './ContentList';
import { loadContents } from '../actions/contentActions';

const ContentAreaWrapper = styled(Col)`
  width: 90%;
  margin: 2% auto 0 auto;
`;

export default function ContentArea() {
  const contents = useSelector(state => state.contents);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(loadContents());
    })();
  }, [dispatch]);

  return (
    <ContentAreaWrapper>
      <SearchArea />
      <ContentList contents={contents} />
    </ContentAreaWrapper>
  );
}
