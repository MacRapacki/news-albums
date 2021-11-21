import AddBtn from "../buttons/AddBtn/AddBtn";

import * as S from "./style";

import { useContainer } from "./useContainer";

interface AddCommentSectionProps {
  id: number;
}

const AddCommentSection: React.FC<AddCommentSectionProps> = ({ id }) => {
  const { setCommentText, postComment } = useContainer({ id });

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
