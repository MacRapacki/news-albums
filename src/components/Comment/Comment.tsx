import * as S from "./style";

interface CommentProps {
  name: string;
  body: string;
}

const Comment: React.FC<CommentProps> = ({ name, body }) => {
  return (
    <S.CommentWrapper>
      <S.CommentAuthor>{name}</S.CommentAuthor>
      <S.CommentContent>{body}</S.CommentContent>
      <S.AddInfo>12 min ago</S.AddInfo>
    </S.CommentWrapper>
  );
};

export default Comment;
