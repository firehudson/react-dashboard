import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import Post from './Post';

const Wrapper = styled('div')`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 10px;
`;

const Posts = ({ posts }) => (
  <Wrapper>
    {map(posts, post => (
      <Post
        key={post.id}
        {...post}
      />
    ))}
  </Wrapper>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })),
};

export default Posts;
