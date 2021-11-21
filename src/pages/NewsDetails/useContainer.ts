import { useState, useEffect } from "react";

import { useMatch } from "react-router-dom";

export interface CommentsTypes {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

export interface PostTypes {
  id: number;
  title: string;
  userId: number;
  body: string;
}

export const useContainer = () => {
  const [post, setPost] = useState<PostTypes>({
    id: 2,
    title: "",
    userId: 2,
    body: "",
  });
  const [comments, setComments] = useState<CommentsTypes[]>([]);

  let match = useMatch("/news/:id");
  const postId = Number(match?.params.id);

  const getPost = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    try {
      const response = await fetch(url);
      const postData = await response.json();
      return postData;
    } catch (err) {
      console.log(err);
    }
  };

  const getComments = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    try {
      const response = await fetch(url);
      const commentsData = await response.json();
      return commentsData;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPost().then((data) => setPost(data));
    getComments().then((data) => setComments(data));
  }, []);

  return { post, comments, postId };
};
