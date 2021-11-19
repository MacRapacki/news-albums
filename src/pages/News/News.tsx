import SectionHeader from "../../components/SectionHeader/SectionHeader";
import NewsCard from "../../components/NewsCard/NewsCard";

import * as S from "./style";

interface NewsProps {}

const News: React.FC<NewsProps> = () => {
  return (
    <S.Wrapper>
      <SectionHeader text="News list" />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </S.Wrapper>
  );
};

export default News;
