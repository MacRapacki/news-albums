import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = styled.div`
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
  }
`;

export const NavLinks = styled(NavLink)`
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

  &.active {
    border-bottom: 2px solid #466bc9;
    color: #466bc9;
  }
`;
