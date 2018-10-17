import React from 'react';
import styled from "styled-components";

const Paper = styled.div`
  background: white;
  box-shadow: 0 0 4px 4px rgba(128, 128, 128, 0.1);
`;

const Card = styled(Paper)`
  border-radius: 0.2rem;
  overflow: hidden;
  height: 100%;
  background: white;
  box-sizing: border-box;
  ${'' /* &:hover {
    box-shadow: 0 0 10px 10px rgba(128, 128, 128, 0.1);
  } */}
`;

const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  width: 100%;
`;

const CardBody = styled.div`
  padding: 2em;
`;

Card.Body = CardBody;
Card.Image = CardImage;

export default Card;
export { Paper };
