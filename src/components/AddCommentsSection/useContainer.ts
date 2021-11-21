import { useState } from "react";

interface UseConainerProps {
  id: number;
}

export const useContainer = ({ id }: UseConainerProps) => {
  const [commentText, setCommentText] = useState("");

  const postComment = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ body: commentText }),
    };
    try {
      const response = await fetch(url, options);
      const postData = await response.json();
      console.log(response.status);
      return postData;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    postComment,
    setCommentText,
  };
};
