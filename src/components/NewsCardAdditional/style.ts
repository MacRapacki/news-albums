import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  justify-content: space-between;
  align-items: flex-end;

  @media (min-width: 768px) {
    display: flex;

    justify-self: flex-end;
  }
`;
