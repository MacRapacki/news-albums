import * as S from "./style";

import Arrow from "../../../utilis/images/arrow.svg";

interface ReadMOreBtnProps {
  id: number;
}

const ReadMOreBtn: React.FC<ReadMOreBtnProps> = ({ id }) => {
  return (
    <S.Wrapper>
      <S.ArrowRight to={`/news/${id}`}>
        <S.Info>Read more</S.Info>
        <img src={Arrow} alt="Arrow Icon" />
      </S.ArrowRight>{" "}
    </S.Wrapper>
  );
};

export default ReadMOreBtn;
