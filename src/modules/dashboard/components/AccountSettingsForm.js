import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'redux-form';
import Input from '../../../components/Input';
import ErrorMessage from '../../../components/ErrorMessage';
import Button from '../../../components/Button';

const AccountSettingsForm = ({ onSubmit, submitError }) => (
  <Form onSubmit={onSubmit}>
    <Field
      name="firstName"
      placeholder="First Name"
      component={Input}
      type="text"
    />
    <Field
      name="lastName"
      placeholder="Last Name"
      component={Input}
      type="text"
    />
    <Field
      name="email"
      placeholder="Email"
      component={Input}
      type="text"
    />
    <Field
      name="status"
      placeholder="Status"
      component={Input}
      type="text"
    />
    <ErrorMessage>{submitError || ''}</ErrorMessage>
    <Button type="submit">Update Settings</Button>
  </Form>
);

AccountSettingsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitError: PropTypes.string,
};

export default AccountSettingsForm;
