import SectionHeader from "../../components/SectionHeader/SectionHeader";
import NewsCard from "../../components/NewsCard/NewsCard";

import * as S from "./style";

import { useContainer } from "./useContainer";

const News: React.FC = () => {
  const { posts } = useContainer();

  return (
    <S.Wrapper>
      <SectionHeader text="News list" />
      {posts?.map((post, index) => {
        const { id, title, body } = post;
        return <NewsCard key={index} id={id} title={title} body={body} />;
      })}
    </S.Wrapper>
  );
};

export default News;
