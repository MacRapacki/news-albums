import * as S from "./style";

import LikeIcon from "../../utilis/images/like.svg";
import CommentIcon from "../../utilis/images/comment.svg";

interface LikesCommentsCounterProps {}

const LikesCommentsCounter: React.FC<LikesCommentsCounterProps> = () => {
  return (
    <S.Wrapper>
      <S.Icon src={LikeIcon} alt="Like Icon" />
      <S.Counter>56</S.Counter>
      <S.Icon src={CommentIcon} alt="Comment Icon" />
      <S.Counter>5</S.Counter>
    </S.Wrapper>
  );
};

export default LikesCommentsCounter;
