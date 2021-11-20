import SectionHeader from "../../components/SectionHeader/SectionHeader";
import AlbumCard from "../../components/AlbumCard/AlbumCard";

import * as S from "./style";

interface AlbumsProps {}

const Albums: React.FC<AlbumsProps> = () => {
  return (
    <S.Wrapper>
      <SectionHeader text="Albums" />
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
    </S.Wrapper>
  );
};

export default Albums;
