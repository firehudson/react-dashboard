import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import NavItems from './NavItems';
import Card from '../../../components/Card';

const Wrapper = styled(Card)`
  width: 200px;
`;

const generateSidebarItems = username => [
  {
    id: 'posts',
    to: `/dashboard/${username}`,
    label: 'My Posts',
  },
  {
    id: 'edit',
    to: `/dashboard/${username}/edit`,
    label: 'Account Settings',
  },
];

const Sidebar = ({ user, activePath }) => (
  <Wrapper>
    <UserInfo {...user} />
    <NavItems
      items={generateSidebarItems(user.username)}
      activePath={activePath}
    />
  </Wrapper>
);

Sidebar.propTypes = {
  user: PropTypes.shape({
    status: PropTypes.string,
    avatar: PropTypes.string,
  }),
  activePath: PropTypes.string.isRequired,
};

export default Sidebar;
