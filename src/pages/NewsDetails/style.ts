import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

export const Overlay = styled.div`
  background-color: transparent;
  border-radius: 16px;
  @media (min-width: 768px) {
    background: #ffffff;
    box-shadow: 0px 8px 32px rgba(59, 75, 165, 0.08);
    border-radius: 16px;
    width: 628px;
    padding: 35px 70px;
  }

  @media (min-width: 1200px) {
    width: 1090px;
    padding: 35px 111px;
  }
`;
