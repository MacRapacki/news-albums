import SectionHeader from "../../components/SectionHeader/SectionHeader";
import AlbumCard from "../../components/AlbumCard/AlbumCard";

import * as S from "./style";

import { useContainer } from "./useContainer";

interface AlbumsProps {}

const Albums: React.FC<AlbumsProps> = () => {
  const { fetchedAlbums } = useContainer();

  return (
    <S.Wrapper>
      <SectionHeader text="Albums" />
      <S.CardsWrapper>
        {fetchedAlbums?.map((album, index) => {
          const { id, title } = album;
          return <AlbumCard key={index} id={id} title={title} />;
        })}
      </S.CardsWrapper>
    </S.Wrapper>
  );
};

export default Albums;
