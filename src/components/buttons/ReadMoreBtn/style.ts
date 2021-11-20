import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const ArrowRight = styled(Link)`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #f4f6f9;
  display: grid;
  place-items: center;
  color: #466bc9;
`;

export const Info = styled.p`
  position: absolute;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.2px;
  margin-right: 8px;
  color: #466bc9;
  right: 100%;
  width: 80px;
  text-align: right;
`;
