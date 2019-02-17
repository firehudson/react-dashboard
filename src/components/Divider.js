import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  height: ${props => props.sizeY ? props.sizeY : '1px'}
  margin: ${props => props.margin ? props.margin : '0px'}
`;

const Line = styled('div')`
  width: ${props => props.sizeX ? props.sizeX : '100%'};
  border-bottom: 1px solid ${props => props.theme.colors.app.primaryBlur};
`;

const Divider = ({ sizeX, sizeY, margin }) => (
  <Wrapper sizeY={sizeY} margin={margin}>
    <Line sizeX={sizeX} />
  </Wrapper>
);

Divider.propTypes = {
  sizeX: PropTypes.string,
  sizeY: PropTypes.string,
  margin: PropTypes.string,
};

export default Divider;
