import { useEffect, useState } from "react";

import SectionHeader from "../../components/SectionHeader/SectionHeader";
import NewsCard from "../../components/NewsCard/NewsCard";

import * as S from "./style";

interface NewsProps {}

const News: React.FC<NewsProps> = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    try {
      const response = await fetch(url);
      const postsList = await response.json();
      return postsList;
    } catch (err) {
      console.log(err);
    }
  };

  console.log(posts);

  useEffect(() => {
    fetchPosts().then((data: []) => setPosts(data));
  }, []);

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
