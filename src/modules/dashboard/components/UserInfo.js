import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Divider from '../../../components/Divider';

const Wrapper = styled('div')`
  width: 100%px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled('img')`
  margin: 10px;
  border-radius: 15px;
`;

const UserInfo = ({ avatar, status, firstName }) => (
  <Wrapper>
    <Avatar src={avatar} alt="user_avatar" />
    <div>{firstName}</div>
    <div>{status}</div>
    <Divider sizeX="60%" margin="10px 0 0 0" />
  </Wrapper>
);

UserInfo.propTypes = {
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  status: PropTypes.string,
};

export default UserInfo;
