import { useEffect, useState } from "react";

interface UseContainerProps {
  id: number;
}

export const useContainer = ({ id }: UseContainerProps) => {
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

  return { photos };
};
