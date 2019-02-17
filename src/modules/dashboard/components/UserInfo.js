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

const Sidebar = ({ avatar, status }) => (
  <Wrapper>
    <Avatar src={avatar} alt="user_avatar" />
    {status}
    <Divider sizeX="60%" margin="10px 0 0 0" />
  </Wrapper>
);

Sidebar.propTypes = {
  avatar: PropTypes.string,
  status: PropTypes.string,
};

export default Sidebar;
