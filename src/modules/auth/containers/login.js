import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import validator from 'validator';
import { login } from '../actions';
import { selectUserError } from '../selectors/user';
import Card from '../../../components/Card';
import LoginForm from '../components/login-form';

const LoginPage = ({ handleSubmit, formError }) => (
  <Card padding="40px" borderRadius="0">
    <LoginForm onSubmit={handleSubmit} submitError={formError} />
  </Card>
);

LoginPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  formError: PropTypes.string,
};

const withForm = reduxForm({
  form: 'login',
  onSubmit: (formValues, l, ownProps) => {
    ownProps.login(formValues.email, formValues.password);
  },
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

const mapStateToProps = createStructuredSelector({
  formError: selectUserError,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    login,
  },
  dispatch,
);

const reduxConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withForm);

export default reduxConnected;
