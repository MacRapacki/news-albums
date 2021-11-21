import { useState, useEffect } from "react";

interface FetchedAlbumsTypes {
  id: number;
  title: string;
  userId: number;
}

export const useContainer = () => {
  const [fetchedAlbums, setFetchedAlbums] = useState<FetchedAlbumsTypes[]>([]);

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

  useEffect(() => {
    fetchAlbums().then((data: []) => setFetchedAlbums(data));
  }, []);

  return { fetchedAlbums };
};
