import * as S from "./style";

interface AlbumCardProps {}

const AlbumCard: React.FC<AlbumCardProps> = () => {
  return (
    <S.Card>
      <S.MainImg alt="albums main picture" />
      <S.CardTitle>tytuł</S.CardTitle>
    </S.Card>
  );
};

export default AlbumCard;
