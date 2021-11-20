import AddBtn from "../buttons/AddBtn/AddBtn";

import * as S from "./style";

interface AddCommentSectionProps {}

const AddCommentSection: React.FC<AddCommentSectionProps> = () => {
  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comments</S.CommentsTitle>
      <S.CommentInput placeholder="Here you can add your comment..." />
      <AddBtn />
    </S.CommentsWrapper>
  );
};

export default AddCommentSection;
