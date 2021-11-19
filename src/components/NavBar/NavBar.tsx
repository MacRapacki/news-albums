import React from "react";
import * as S from "./style";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <S.Navbar>
      <S.NavLinks to="/">News</S.NavLinks>
      <S.NavLinks to="/albums">Albums</S.NavLinks>
    </S.Navbar>
  );
};

export default NavBar;
