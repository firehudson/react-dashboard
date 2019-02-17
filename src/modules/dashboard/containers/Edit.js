import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { updateUser } from '../actions';
import { selectUpdateSuccessMessage } from '../selectors/settings';
import ContentWrapper from '../components/ContentWrapper';
import AccountSettingsForm from '../components/AccountSettingsForm';
import { selectUserData } from '../../auth/selectors/user';
import Card from '../../../components/Card';

const CenteredCard = styled(Card)`
  margin: 30px auto;
  width: 200px;
  text-align: center;
  padding: 30px;
`;

const EditSettingsPage = ({ handleSubmit, dirty, successMessage }) => (
  <ContentWrapper>
    <CenteredCard>
      <AccountSettingsForm
        onSubmit={handleSubmit}
        dirty={dirty}
        successMessage={successMessage}
      />
    </CenteredCard>
  </ContentWrapper>
);

EditSettingsPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  dirty: PropTypes.bool,
  successMessage: PropTypes.string,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

const withForm = reduxForm({
  form: 'editUserForm',
  onSubmit: (formValues, l, ownProps) => {
    ownProps.updateUser(formValues.id, formValues);
  },
  enableReinitialize: true,
})(EditSettingsPage);

const mapStateToProps = createStructuredSelector({
  initialValues: selectUserData,
  successMessage: selectUpdateSuccessMessage,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    updateUser,
  },
  dispatch,
);

const reduxConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withForm);

export default reduxConnected;
