import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';

const InputWrapper = styled(InputGroup)`
  margin: 10px 0;
`;

export default function FormTextInput({
  id,
  type,
  text,
  placeholder,
  onChange: handleChange,
}) {
  return (
    <InputWrapper>
      <Form.Control
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </InputWrapper>
  );
}
