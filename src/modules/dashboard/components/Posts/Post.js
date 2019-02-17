import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../../../../components/Card';

const Title = styled('h4')`
  font-size: 17px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const Content = styled('p')`
  font-size: 13px;
`;

const Wrapper = styled(Card)`
  margin: 5px;
`;

const Post = ({ title, content }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </Wrapper>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
