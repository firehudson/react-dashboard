import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'redux-form';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const LoginForm = ({ onSubmit }) => (
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
    <Button type="submit">Login</Button>
  </Form>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
