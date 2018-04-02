import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import clamp from "lodash.clamp";
import colors from "../attributes/colors";

const ProgressBackground = styled.div`
  position: relative;
  height: 5px;
  border-radius: 9999px;
  background-color: ${colors.grey1};
  overflow: hidden;
`;

const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: " ";
  width: 0%;
  background-color: ${colors.blue};
`;

const Progress = ({ min, max, value, ...rest }) => {
  const adjustedValue = clamp(value, min, max);
  const percentage = 100 * (adjustedValue / (max - min));

  return (
    <ProgressBackground
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      tabIndex="0"
      {...rest}
    >
      <ProgressBar style={{ width: `${percentage}%` }} />
    </ProgressBackground>
  );
};

Progress.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number
};

Progress.defaultProps = {
  min: 0,
  max: 100,
  value: 0
};

export default Progress;
