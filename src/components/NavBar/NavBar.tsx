import React from "react";

import Logo from "../Logo/Logo";

import * as S from "./style";

import { useLocation } from "react-router-dom";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  let location = useLocation().pathname === "/";

  return (
    <S.Navbar>
      <Logo />
      <S.NavLinks to="/news" test="kek" className={location ? "active" : ""}>
        News
      </S.NavLinks>
      <S.NavLinks to="/albums">Albums</S.NavLinks>
    </S.Navbar>
  );
};

export default NavBar;
