import styled from "styled-components";

export const CommentWrapper = styled.div`
  width: 328px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 8px;
  padding: 24px;
`;

export const CommentAuthor = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0.2px;
  text-align: left;
  margin-bottom: 4px;
`;

export const CommentContent = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0.25px;
  text-align: left;
`;
