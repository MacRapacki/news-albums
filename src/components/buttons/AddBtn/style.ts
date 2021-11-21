import styled from "styled-components";

export const AddCommentBtn = styled.button`
  height: 48px;
  width: 328px;
  border-radius: 8px;
  background-color: #466bc9;
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.2px;
  text-align: center;
  border: none;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 158px;
    height: 40px;
  }
`;

export const SmallDeviceText = styled.span`
  display: block;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const BigDeviceText = styled.span`
  display: none;

  @media (min-width: 1200px) {
    display: block;
  }
`;
