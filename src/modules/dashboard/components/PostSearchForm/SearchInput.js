import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled('input')`
  width: 100%;
  margin: 10px;
  font-size: 17px;
  padding-left: 10px;
  border-radius: 2px;
  border-style: none;

  :focus {
    outline: none;
  }
`;

const SearchInput = ({
  input,
  type,
  placeholder,
}) => (
  <StyledInput {...input} placeholder={placeholder} type={type} />
);

SearchInput.propTypes = {
  input: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SearchInput;
