import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import AlbumCard from "../../components/AlbumCard/AlbumCard";

import * as S from "./style";

interface AlbumsProps {}

const Albums: React.FC<AlbumsProps> = () => {
  const [fetchedAlbums, setFetchedAlbums] = useState([]);

  const fetchAlbums = async () => {
    const url = "https://jsonplaceholder.typicode.com/albums";

    try {
      const response = await fetch(url);
      const albumsList = await response.json();
      return albumsList;
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(fetchedAlbums);

  useEffect(() => {
    fetchAlbums().then((data: []) => setFetchedAlbums(data));
  }, []);

  return (
    <S.Wrapper>
      <SectionHeader text="Albums" />
      {fetchedAlbums?.map((album, index) => {
        const { id, title } = album;
        return <AlbumCard key={index} id={id} title={title} />;
      })}
    </S.Wrapper>
  );
};

export default Albums;
