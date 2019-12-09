import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import LoginButton from '../assets/img/kakao_account_login_btn_medium_wide.png';
import { socialLogin } from '../actions/userActions';

const SocialLoginWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
`;

const SocialLoginButton = styled.img`
  margin: 10px 0;
`;

const SocialLogin = () => {
  const dispatch = useDispatch();

  const handleClick = async event => {
    event.preventDefault();
    const { id } = event.target;
    await dispatch(socialLogin(id));
  };

  return (
    <Fragment>
      <SocialLoginWrapper>
        <SocialLoginButton
          id="kakao"
          src={LoginButton}
          alt="kakao-login-button-indicator"
          onClick={handleClick}
        />
      </SocialLoginWrapper>
    </Fragment>
  );
};

export default SocialLogin;
