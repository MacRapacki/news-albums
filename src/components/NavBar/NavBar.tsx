import React from "react";

import Logo from "../Logo/Logo";

import * as S from "./style";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <S.Navbar>
      <Logo />
      <S.NavLinks to="/news">News</S.NavLinks>
      <S.NavLinks to="/albums">Albums</S.NavLinks>
    </S.Navbar>
  );
};

export default NavBar;
