import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  height: 139px;
  width: 160px;
  left: 16px;
  border-radius: 8px;
  background-color: white;
  overflow: hidden;
  cursor: pointer;
  margin: 0 8px 8px 8px;
  box-shadow: 0px 10.1px 25.25px rgba(240, 242, 245, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 768px) {
    height: 170px;
    width: 202px;
    border-radius: 8px;
    margin: 0 10px 16px 10px;
  }
`;

export const MainImgWrapper = styled.div`
  height: 119px;
  width: 100%;
  margin-bottom: 12px;
  overflow: hidden;
  display: grid;
  place-items: center;
  img {
    width: 100%;
  }
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
