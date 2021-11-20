import * as S from "./style";

import LikesCommentsCounter from "../LikesCommentsCounter/LikesCommentsCounter";

interface NewsDetailsCardProps {}

const NewsDetailsCard: React.FC<NewsDetailsCardProps> = () => {
  return (
    <S.Card>
      <S.CardHeader>News details</S.CardHeader>
      <S.Title>asd asd asd asd </S.Title>
      <S.LIkesAndDateWrapper>
        {" "}
        <LikesCommentsCounter />
        <S.AddedInfo>
          <span>Added:</span>15.10.21
        </S.AddedInfo>
      </S.LIkesAndDateWrapper>

      <S.Content>
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, vero
        facilis, aspernatur dolor distinctio nesciunt mollitia recusandae
        consectetur ipsum praesentium cumque facere, expedita laborum et nemo
        ipsa aliquid? Veniam, at!{" "}
      </S.Content>
    </S.Card>
  );
};

export default NewsDetailsCard;
