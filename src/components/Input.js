import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ErrorMessage from './ErrorMessage';

const Input = styled('input')`
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.app.background};
  color: ${props => props.theme.colors.app.primary};
  border-style: none;
  font-size: 16px;

  :focus {
    outline: none;
  }
`;

const Wrapper = styled('div')`
  margin-bottom: 3px;
`;

const InputField = ({
  input,
  type,
  placeholder,
  meta,
}) => (
  <Wrapper>
    <Input {...input} placeholder={placeholder} type={type} />
    <ErrorMessage>
      {(meta.touched && meta.error) ? meta.error : ''}
    </ErrorMessage>
  </Wrapper>
);

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onDragStart: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
  }).isRequired,
};

export default InputField;
