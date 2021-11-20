import SectionHeader from "../../components/SectionHeader/SectionHeader";
import GoBackBtn from "../../components/buttons/GoBackBtn/GoBackBtn";
import NewsDetailsCard from "../../components/NewsDetailCard/NewsDetailCard";
import AddCommentSection from "../../components/AddCommentsSection/AddCommentsSection";
import Comment from "../../components/Comment/Comment";

import { useMatch } from "react-router-dom";

import * as S from "./style";
import { useEffect, useState } from "react";

interface NewsDetailsProps {}

const NewsDetails: React.FC<NewsDetailsProps> = () => {
  const [post, setPost] = useState<any>({});
  const [comments, setComments] = useState<any>([]);

  let match = useMatch("/news/:id");
  const postId = Number(match?.params.id);

  const getPost = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    try {
      const response = await fetch(url);
      const postData = await response.json();
      return postData;
    } catch (err) {
      console.log(err);
    }
  };

  const getComments = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    try {
      const response = await fetch(url);
      const commentsData = await response.json();
      return commentsData;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPost().then((data) => setPost(data));
    getComments().then((data) => setComments(data));
  }, []);

  console.log(comments);
  return (
    <S.Wrapper>
      <SectionHeader text="News Details" />
      <GoBackBtn>{"<"}</GoBackBtn>
      <NewsDetailsCard post={{ title: post.title, body: post.body }} />
      <S.Overlay>
        {" "}
        <AddCommentSection id={postId} />
        <S.CommentOverlay>
          {comments?.map((item: any, index: number) => {
            const { body, name } = item;
            return <Comment key={index} body={body} name={name} />;
          })}
        </S.CommentOverlay>
      </S.Overlay>
    </S.Wrapper>
  );
};

export default NewsDetails;
