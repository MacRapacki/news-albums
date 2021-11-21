import * as S from "./style";

import { useContainer } from "./useContainer";

interface AlbumCardProps {
  id: number;
  title: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ id, title }) => {
  const { photos } = useContainer({ id });

  return (
    <S.Card>
      <S.MainImgWrapper>
        <img src={photos[0]?.thumbnailUrl} alt="album" />
      </S.MainImgWrapper>
      <S.CardTitle>{title.substring(0, 15)}</S.CardTitle>
    </S.Card>
  );
};

export default AlbumCard;
