import styled from "styled-components";

export const CommentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CommentsTitle = styled.label`
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0.2px;
  text-align: left;
  margin-bottom: 12px;
  padding-left: 8px;
  max-width: 328px;
  color: #586976;

  @media (min-width: 768px) {
    width: 628px;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    margin-bottom: 24px;
  }
`;

export const CommentInput = styled.textarea`
  width: 328px;
  height: 123px;
  border-radius: 8px;
  margin-bottom: 12px;
  padding: 16px 20px;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.2px;
  border: none;
  resize: none;

  @media (min-width: 768px) {
    width: 488px;
    background-color: #f7f9fd;
    margin-bottom: 16px;
    padding: 10px 16px;
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 1200px) {
    width: 868px;
    height: 80px;
  }
`;
