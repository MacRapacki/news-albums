import * as S from "./style";

import Arrow from "../../../utilis/images/arrow.svg";

interface ReadMOreBtnProps {}

const ReadMOreBtn: React.FC<ReadMOreBtnProps> = () => {
  return (
    <S.Wrapper>
      <S.Info>Read more</S.Info>
      <S.ArrowRight to="/news">
        <img src={Arrow} alt="" />
      </S.ArrowRight>{" "}
    </S.Wrapper>
  );
};

export default ReadMOreBtn;
