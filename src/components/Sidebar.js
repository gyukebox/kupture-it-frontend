import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import LoginArea from './LoginArea';
import Profile from './Profile';

const SidebarWrapper = styled(Col)`
  background-color: #0d47a1;
`;

const SidebarContainer = styled.div`
  width: 90%;
  margin: 10% auto 0 auto;
`;

const SidebarTitle = styled.h1`
  color: #17a2b8;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

export default function Sidebar() {
  const { isLoggedIn, user } = useSelector(state => state.users);
  return (
    <SidebarWrapper lg={3} md={3} sm={3}>
      <SidebarContainer>
        <SidebarTitle>KUpture It!</SidebarTitle>
        {isLoggedIn ? <Profile user={user} /> : <LoginArea />}
      </SidebarContainer>
    </SidebarWrapper>
  );
}
