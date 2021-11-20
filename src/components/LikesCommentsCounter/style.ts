import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Icon = styled.img`
  height: 21px;
  width: 14px;
  margin-right: 4px;
`;

export const Counter = styled.p`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.2px;
  margin-right: 16px;
`;
