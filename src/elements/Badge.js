import styled from "styled-components";

import { borderWidth, radius } from "../attributes/spacing";
import colors from "../attributes/colors";

const Badge = styled.span`
  font-family: sweden_sansregular, sans-serif;
  background-color: ${props => colors[props.color]};
  border-radius: ${radius};
  padding: 0.4em 0.8em;
  color: white
  font-weight: bold;

  line-height: 1.25em;
  font-size: 1rem;
  display: inline-block;
`;

export default Badge;
