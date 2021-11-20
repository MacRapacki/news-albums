import { useState, useEffect } from "react";
import AddBtn from "../buttons/AddBtn/AddBtn";

import * as S from "./style";

interface AddCommentSectionProps {
  id: number;
}

const AddCommentSection: React.FC<AddCommentSectionProps> = ({ id }) => {
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

  console.log(commentText);
  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comments</S.CommentsTitle>
      <S.CommentInput
        placeholder="Here you can add your comment..."
        onChange={(e) => setCommentText(e.target.value)}
      />
      <AddBtn onclick={postComment} />
    </S.CommentsWrapper>
  );
};

export default AddCommentSection;
