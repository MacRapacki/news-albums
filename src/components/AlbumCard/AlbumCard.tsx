import { useEffect, useState } from "react";
import * as S from "./style";

interface AlbumCardProps {
  id: number;
  title: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ id, title }) => {
  const [photos, setPhotos] = useState<any[]>([]);

  const fetchPhotos = async () => {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;

    try {
      const response = await fetch(url);
      const photosList = await response.json();
      return photosList;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPhotos().then((data: []) => setPhotos(data));
  }, []);

  return (
    <S.Card>
      <S.MainImgWrapper>
        <img src={photos[0]?.thumbnailUrl} alt="album" />
      </S.MainImgWrapper>
      <S.CardTitle>{title}</S.CardTitle>
    </S.Card>
  );
};

export default AlbumCard;
