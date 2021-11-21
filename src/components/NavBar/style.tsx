import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface Props {
  test?: string;
}

export const Navbar = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 1;

  &::after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    width: 1px;
    height: 24px;
    transform: translate(-50%, -50%);
    background-color: #f0f2f5;

    @media (min-width: 768px) {
      display: none;
    }
  }

  @media (min-width: 768px) {
    position: relative;
    margin-bottom: 41px;
  }
`;

export const NavLinks = styled(NavLink)<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  color: black;
  border-bottom: 2px solid transparent;

  @media (min-width: 768px) {
    width: 80px;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.2px;
  }

  &.active {
    border-bottom: 2px solid #466bc9;
    color: #466bc9;
  }
`;
