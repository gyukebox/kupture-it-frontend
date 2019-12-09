import React from 'react';
import styled from 'styled-components';
import { Form, InputGroup } from 'react-bootstrap';

const SearchAreaWrapper = styled.div`
  width: 100%;
`;

const SearchAreaContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`;

// TODO: Add Redux action regarding search

export default function SearchArea() {
  return (
    <SearchAreaWrapper>
      <SearchAreaContainer>
        <Form>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>검색</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control placeholder="검색어를 입력하세요" />
          </InputGroup>
        </Form>
      </SearchAreaContainer>
    </SearchAreaWrapper>
  );
}
