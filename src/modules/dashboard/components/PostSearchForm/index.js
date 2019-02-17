import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field, Form } from 'redux-form';
import Button from '../../../../components/Button';
import SearchInput from './SearchInput';

const StyledForm = styled(Form)`
  display: flex;
  width: 60%;
  margin-left: 5px;
`;

const StyledButton = styled(Button)`
  width: 100px;
  border-radius: 2px;
`;

const PostSearchForm = ({ onSubmit }) => (
  <StyledForm onSubmit={onSubmit}>
    <Field
      name="searchText"
      placeholder="Search posts"
      component={SearchInput}
      type="text"
    />
    <StyledButton type="submit">Search</StyledButton>
  </StyledForm>
);

PostSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PostSearchForm;
