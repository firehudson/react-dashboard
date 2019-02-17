import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchPosts } from '../actions';
import ContentWrapper from '../components/ContentWrapper';
import PostSearchForm from '../components/PostSearchForm/index';
import Posts from '../components/Posts';
import { selectPostsData } from '../selectors/posts';
import { selectUserData } from '../../auth/selectors/user';

class PostsPage extends Component {
  constructor(props) {
    super(props);

    props.fetchPosts(props.user.id);
  }

  render() {
    const { posts, handleSubmit } = this.props;

    return (
      <ContentWrapper>
        <PostSearchForm onSubmit={handleSubmit} />
        <Posts posts={posts} />
      </ContentWrapper>
    );
  }
}

PostsPage.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  posts: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const withForm = reduxForm({
  form: 'searchPosts',
  onSubmit: (formValues, l, ownProps) => {
    ownProps.fetchPosts(ownProps.user.id, formValues.searchText);
  },
})(PostsPage);

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
)(withForm);

export default reduxConnected;
