import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchPosts } from '../actions';
import ContentWrapper from '../components/ContentWrapper';
import Posts from '../components/Posts';
import { selectPostsData } from '../selectors/posts';
import { selectUserData } from '../../auth/selectors/login';

class PostsPage extends Component {
  constructor(props) {
    super(props);

    props.fetchPosts(props.user.id);
  }

  render() {
    const { posts } = this.props;

    return (
      <ContentWrapper>
        <Posts posts={posts} />
      </ContentWrapper>
    );
  }
}

PostsPage.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  posts: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = createStructuredSelector({
  posts: selectPostsData,
  user: selectUserData,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchPosts,
  },
  dispatch,
);

const reduxConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsPage);

export default reduxConnected;
