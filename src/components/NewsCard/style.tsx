import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  position: relative;
  width: 328px;
  border-radius: 8px;
  background-color: white;
  padding: 24px;
  margin: 0 5px 8px 5px;

  @media (min-width: 768px) {
    margin: 0 10px 16px 10px;
    width: 435px;
    border-radius: 16px;
    padding: 32px;
  }

  @media (min-width: 1200px) {
    width: 535px;
    border-radius: 16px;
    padding: 32px;
  }
`;

export const Title = styled.h2`
  max-width: 232px;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.2;
  font-weight: 600;
  margin-bottom: 4px;

  @media (min-width: 768px) {
    max-width: 300px;
    margin-bottom: 8px;
  }

  @media (min-width: 1200px) {
    max-width: 410px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.2;
  font-weight: 600;
  color: #a0abb2;
  max-width: 232px;

  @media (min-width: 768px) {
    max-width: 330px;
    margin-bottom: 27px;
  }

  @media (min-width: 1200px) {
    max-width: 471px;
  }
`;

export const LinkToPost = styled(Link)`
  width: 20px;
  height: 20px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 50%;
  background-color: #f4f6f9;
  display: grid;
  place-items: center;
  color: #466bc9;
  position: absolute;
  top: 50%;
  right: 25.5px;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    display: none;
  }
`;
