import styled from "styled-components";
import { color, fontFamily } from "styled-system";

import { radius } from "../attributes/spacing";

const Badge = styled.span`
  ${color}
  ${fontFamily}
  border-radius: ${radius};
  padding: 0.4em 0.8em;
  color: white;
  font-weight: bold;
  line-height: 1.25em;
  display: inline-block;
`;

Badge.defaultProps = {
  fontFamily: "sans-serif"
};

export default Badge;
