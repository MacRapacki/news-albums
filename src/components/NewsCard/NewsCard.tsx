import NewsCardAdditional from "../NewsCardAdditional/NewsCardAdditional";

import ArrowIcon from "../../utilis/images/arrow.svg";

import * as S from "./style";

interface NewsCardProps {
  id: number;
  title: string;
  body: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ id, title, body }) => {
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{body}</S.Subtitle>
      <S.LinkToPost to={`/news/${id}`}>
        <img src={ArrowIcon} alt="Arrow Icon" />
      </S.LinkToPost>
      <NewsCardAdditional id={id} />
    </S.Card>
  );
};

export default NewsCard;
