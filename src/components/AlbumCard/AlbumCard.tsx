import * as S from "./style";

interface AlbumCardProps {
  id: number;
  title: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ id, title }) => {
  return (
    <S.Card>
      <S.MainImg alt="albums main picture" />
      <S.CardTitle>{title}</S.CardTitle>
    </S.Card>
  );
};

export default AlbumCard;
