import styled from 'styled-components';

export default styled.button`
  padding: 1rem 2rem;
  color: ${props => props.theme.offWhite};
  display: inline-block;
  background: ${props => props.theme.blue};
  transition: 0.3s;
  font-weight: 1rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  cursor: pointer;
`;
