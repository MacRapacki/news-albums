import * as S from "./style";

import ArrowIcon from "../../utilis/images/arrow.svg";

import LikesCommentsCounter from "../LikesCommentsCounter/LikesCommentsCounter";

interface NewsDetailsCardProps {
  post: {
    title: string;
    body: string;
  };
}

const NewsDetailsCard: React.FC<NewsDetailsCardProps> = ({ post }) => {
  return (
    <S.Card>
      <S.CardHeader>News details</S.CardHeader>
      <S.Title>{post.title} </S.Title>
      <S.LIkesAndDateWrapper>
        {" "}
        <LikesCommentsCounter />
        <S.AddedInfo>
          <span>Added:</span>15.10.21
        </S.AddedInfo>
      </S.LIkesAndDateWrapper>

      <S.Content>{post.body}</S.Content>
      <S.ReturnLink to="/news">
        <img src={ArrowIcon} alt="Arrow Icon" />
        <span>Back</span>
      </S.ReturnLink>
    </S.Card>
  );
};

export default NewsDetailsCard;
