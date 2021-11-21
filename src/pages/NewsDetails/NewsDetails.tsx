import * as S from "./style";

import SectionHeader from "../../components/SectionHeader/SectionHeader";
import GoBackBtn from "../../components/buttons/GoBackBtn/GoBackBtn";
import NewsDetailsCard from "../../components/NewsDetailCard/NewsDetailCard";
import AddCommentSection from "../../components/AddCommentsSection/AddCommentsSection";
import Comment from "../../components/Comment/Comment";

import { useContainer, CommentsTypes } from "./useContainer";

const NewsDetails: React.FC = () => {
  const { post, comments, postId } = useContainer();

  return (
    <S.Wrapper>
      <SectionHeader text="News Details" />
      <GoBackBtn>{"<"}</GoBackBtn>
      <NewsDetailsCard post={{ title: post.title, body: post.body }} />
      <S.Overlay>
        {" "}
        <AddCommentSection id={postId} />
        <S.CommentOverlay>
          {comments?.map((item: CommentsTypes, index: number) => {
            const { body, name } = item;
            return <Comment key={index} body={body} name={name} />;
          })}
        </S.CommentOverlay>
      </S.Overlay>
    </S.Wrapper>
  );
};

export default NewsDetails;
