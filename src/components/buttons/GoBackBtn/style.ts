import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackBtn = styled(Link)`
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 1px solid #f0f2f5;
  left: 24px;
  top: 24px;
  display: grid;
  place-items: center;
  text-decoration: none;
  transform: rotate(180deg);

  @media (min-width: 768px) {
    display: none;
  }
`;
