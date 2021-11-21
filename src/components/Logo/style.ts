import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoWrapper = styled(Link)`
  width: 86px;
  height: 16px;
  position: absolute;
  left: 64px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
