import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { logout } from '../actions/userActions';

const ProfileWrapper = styled.div`
  width: 90%;
  margin: 50px auto;
`;

const Username = styled.h2`
  color: white;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;

const Profile = ({ user }) => {
  const dispatch = useDispatch();

  const handleClick = event => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <ProfileWrapper>
      <Username>{user}</Username>
      <Button onClick={handleClick} variant="danger">
        로그아웃
      </Button>
    </ProfileWrapper>
  );
};

export default Profile;
