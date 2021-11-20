import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  position: relative;
  width: 328px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 32px 24px 40px 24px;
  margin-bottom: 40px;
  box-shadow: 0px 8px 32px rgba(59, 75, 165, 0.08);

  @media (min-width: 768px) {
    width: 628px;
    padding: 35px 70px;
  }

  @media (min-width: 1200px) {
    width: 1090px;
    padding: 35px 111px;
  }
`;

export const Title = styled.h4`
  max-width: 280px;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.4;
  font-weight: 600;
  margin-bottom: 12px;
  align-self: flex-start;

  @media (min-width: 768px) {
    max-width: 868px;
    margin-bottom: 24px;
  }
`;

export const Content = styled.p`
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.25;
  font-weight: 500;
  max-width: 280px;

  @media (min-width: 768px) {
    max-width: 868px;
  }
`;

export const CardHeader = styled.p`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.2px;
  text-align: center;
  margin-bottom: 41px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const LIkesAndDateWrapper = styled.div`
  width: 100%;
  display: none;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const AddedInfo = styled.div`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.2px;

  span {
    color: #a0abb2;
    margin-right: 2px;
  }
`;

export const ReturnLink = styled(Link)`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: #f4f6f9;
  display: none;
  place-items: center;
  position: absolute;
  left: 70px;

  img {
    transform: rotate(180deg);
  }

  span {
    position: absolute;
    left: 100%;
    margin-left: 8px;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.2px;
  }

  @media (min-width: 768px) {
    display: grid;
  }

  @media (min-width: 1200px) {
    left: 111px;
  }
`;
