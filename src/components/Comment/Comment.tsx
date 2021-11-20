import * as S from "./style";

interface CommentProps {}

const Comment: React.FC<CommentProps> = () => {
  return (
    <S.CommentWrapper>
      <S.CommentAuthor>kiemon</S.CommentAuthor>
      <S.CommentContent>
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In natus nulla
        quaerat, perspiciatis, eius placeat cumque qui explicabo est expedita
        corporis alias eveniet molestiae laborum facilis repellat magni iure
        beatae.{" "}
      </S.CommentContent>
      <S.AddInfo>12 min ago</S.AddInfo>
    </S.CommentWrapper>
  );
};

export default Comment;
