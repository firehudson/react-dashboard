import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import validator from 'validator';
import Card from '../../../components/Card';
import LoginForm from '../components/login-form';

const LoginPage = ({ handleSubmit }) => (
  <Card padding="40px" borderRadius="0">
    <LoginForm onSubmit={handleSubmit} />
  </Card>
);

LoginPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const withForm = reduxForm({
  form: 'login',
  onSubmit: formValues => console.log(formValues),
  validate: (values) => {
    const errors = {};

    if (!values.email || validator.isEmpty(values.email)) {
      errors.email = 'Email address is required';
    } else if (values.email && !validator.isEmail(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password || validator.isEmpty(values.password)) {
      errors.password = 'Password is required';
    }

    return errors;
  },
})(LoginPage);

export default withForm;
