import styled from "styled-components";

export const Card = styled.div`
  height: 139px;
  width: 160px;
  left: 16px;
  border-radius: 8px;
  background-color: white;
  overflow: hidden;
  cursor: pointer;
  margin: 0 8px 8px 8px;
  box-shadow: 0px 10.1px 25.25px rgba(240, 242, 245, 0.5);

  @media (min-width: 768px) {
    height: 198px;
    width: 212px;
    border-radius: 8px;
    margin: 0 10px 16px 10px;
  }
`;

export const MainImg = styled.img`
  width: 100%;
  margin-bottom: 12px;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.2;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.25px;
  }
`;
