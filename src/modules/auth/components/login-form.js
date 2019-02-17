import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'redux-form';
import Input from '../../../components/Input';
import ErrorMessage from '../../../components/ErrorMessage';
import Button from '../../../components/Button';

const LoginForm = ({ onSubmit, submitError }) => (
  <Form onSubmit={onSubmit}>
    <Field
      name="email"
      placeholder="Email"
      component={Input}
      type="text"
    />
    <Field
      name="password"
      placeholder="Password"
      component={Input}
      type="password"
    />
    <ErrorMessage>{submitError || ''}</ErrorMessage>
    <Button type="submit">Login</Button>
  </Form>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitError: PropTypes.string,
};

export default LoginForm;
