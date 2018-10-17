import styled from 'styled-components';
import { color } from 'styled-system';

const Swatch = styled.div`
  ${color}
  width: 50px;
  height: 50px;
  margin: 10px;
  padding: 0;
  border-radius: 3px;
  ${'' /* transition: transform 0.15s ease-out, background 0.1s linear;
  &:hover {
    transform: scale(1.1);
  } */}
`;

export default Swatch;
