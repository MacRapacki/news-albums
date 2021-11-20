import SectionHeader from "../../components/SectionHeader/SectionHeader";
import GoBackBtn from "../../components/buttons/GoBackBtn/GoBackBtn";
import NewsDetailsCard from "../../components/NewsDetailCard/NewsDetailCard";
import AddCommentSection from "../../components/AddCommentsSection/CommentsSection";
import Comment from "../../components/Comment/Comment";

import * as S from "./style";

interface NewsDetailsProps {}

const NewsDetails: React.FC<NewsDetailsProps> = () => {
  return (
    <S.Wrapper>
      <SectionHeader text="News Details" />
      <GoBackBtn>{"<"}</GoBackBtn>
      <NewsDetailsCard />
      <AddCommentSection />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </S.Wrapper>
  );
};

export default NewsDetails;
