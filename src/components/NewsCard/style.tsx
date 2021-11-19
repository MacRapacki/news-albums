import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  position: relative;
  width: 328px;
  border-radius: 8px;
  background-color: white;
  padding: 24px;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  max-width: 232px;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.2;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.2;
  font-weight: 600;
  color: #a0abb2;
  max-width: 232px;
`;

export const LinkToPost = styled(Link)`
  width: 20px;
  height: 20px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 50%;
  background-color: lightgray;
  display: grid;
  place-items: center;
  color: #466bc9;
  position: absolute;
  top: 50%;
  right: 25.5px;
  transform: translateY(-50%);
`;
