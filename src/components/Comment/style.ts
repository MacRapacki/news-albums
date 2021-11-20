import styled from "styled-components";

export const CommentWrapper = styled.div`
  position: relative;
  width: 328px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px;
  margin: 0 25px 8px 25px;
  border: 1px solid #dee7f7;

  @media (min-width: 768px) {
    width: 488px;
    background-color: #f7f9fd;
    margin: 0 0 8px 0;
  }

  @media (min-width: 1200px) {
    width: 424px;
    margin: 8px 5px;
  }
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

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const AddInfo = styled.p`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.25px;
  text-align: right;
  color: #979797;
  width: 100%;
  right: 0;
  bottom: 0;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
