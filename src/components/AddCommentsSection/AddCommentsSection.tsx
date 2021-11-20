// import { useState, useEffect } from "react";
import AddBtn from "../buttons/AddBtn/AddBtn";

import * as S from "./style";

interface AddCommentSectionProps {
  id: number;
}

const AddCommentSection: React.FC<AddCommentSectionProps> = ({ id }) => {
  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comments</S.CommentsTitle>
      <S.CommentInput placeholder="Here you can add your comment..." />
      <AddBtn />
    </S.CommentsWrapper>
  );
};

export default AddCommentSection;
