import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Error = styled('div')`
  font-size: 10px;
  padding-left: 5px;
  color: orangered;
  height: 15px;
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
    <Error>{(meta.touched && meta.error) ? meta.error : ''}</Error>
  </Wrapper>
);

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
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
