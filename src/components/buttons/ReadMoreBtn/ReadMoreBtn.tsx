import * as S from "./style";

import Arrow from "../../../utilis/images/arrow.svg";

interface ReadMOreBtnProps {
  id: number;
}

const ReadMOreBtn: React.FC<ReadMOreBtnProps> = ({ id }) => {
  return (
    <S.Wrapper>
      <S.Info>Read more</S.Info>
      <S.ArrowRight to={`/news/${id}`}>
        <img src={Arrow} alt="Arrow Icon" />
      </S.ArrowRight>{" "}
    </S.Wrapper>
  );
};

export default ReadMOreBtn;
