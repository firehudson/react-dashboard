import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'redux-form';
import Input from '../../../components/Input';
import ErrorMessage from '../../../components/ErrorMessage';
import SuccessMessage from '../../../components/SuccessMessage';
import Button from '../../../components/Button';

const AccountSettingsForm = ({
  onSubmit,
  submitError,
  successMessage,
  dirty,
}) => (
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
    {(!dirty && successMessage) && (
      <SuccessMessage>{successMessage}</SuccessMessage>
    )}
    <ErrorMessage>{submitError || ''}</ErrorMessage>
    <Button type="submit">Update Settings</Button>
  </Form>
);

AccountSettingsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitError: PropTypes.string,
  successMessage: PropTypes.string,
  dirty: PropTypes.bool,
};

export default AccountSettingsForm;
