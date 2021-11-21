import { useState, useEffect } from "react";

export const useContainer = () => {
  const [posts, setPosts] = useState<any[]>([]);

  const fetchPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    try {
      const response = await fetch(url);
      const postsList = await response.json();
      return postsList;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts().then((data: []) => setPosts(data));
  }, []);

  return { posts };
};
