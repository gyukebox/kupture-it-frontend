import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import FormTextInput from './FormTextInput';
import { login } from '../actions/userActions';

const FormWrapper = styled(Form)`
  width: 90%;
  margin: 50px auto;
`;

export default function LoginRegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleEmailInput = event => {
    event.preventDefault();
    const { value } = event.target;
    setEmail(value);
  };

  const handlePasswordInput = event => {
    event.preventDefault();
    const { value } = event.target;
    setPassword(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await dispatch(login(email, password));
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormTextInput
        id="id"
        type="id"
        text="아이디"
        placeholder="아이디를 입력하세요"
        onChange={handleEmailInput}
      />
      <FormTextInput
        id="password"
        type="password"
        text="비밀번호"
        placeholder="비밀번호를 입력하세요"
        onChange={handlePasswordInput}
      />
      <Button variant="primary" type="submit">
        로그인
      </Button>
    </FormWrapper>
  );
}
