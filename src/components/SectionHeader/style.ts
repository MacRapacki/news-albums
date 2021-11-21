import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 88px;
  display: grid;
  place-items: center;
  background-color: white;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 16px;
  font-weight: 700;
`;
