import styled from 'styled-components';

const Card = styled('div')`
  background-color: white;
  padding: ${props => props.padding ? props.padding : '10px'};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '4px'};
`;

export default Card;
