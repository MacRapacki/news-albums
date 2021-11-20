import NewsCardAdditional from "../NewsCardAdditional/NewsCardAdditional";

import * as S from "./style";

interface NewsCardProps {}

const NewsCard: React.FC<NewsCardProps> = () => {
  return (
    <S.Card>
      <S.Title>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </S.Title>
      <S.Subtitle>
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum error
        quos unde. Asperiores expedita rerum dolorum accusamus tempore!
        Inventore praes
      </S.Subtitle>
      <S.LinkToPost to="/">{">"}</S.LinkToPost>
      <NewsCardAdditional />
    </S.Card>
  );
};

export default NewsCard;
