import ReadMOreBtn from "../buttons/ReadMoreBtn/ReadMoreBtn";
import LikesCommentsCounter from "../LikesCommentsCounter/LikesCommentsCounter";

import { Wrapper } from "./style";

interface NewsCardAdditionalProps {
  id: number;
}

const NewsCardAdditional: React.FC<NewsCardAdditionalProps> = ({ id }) => {
  return (
    <Wrapper>
      <LikesCommentsCounter />
      <ReadMOreBtn id={id} />
    </Wrapper>
  );
};

export default NewsCardAdditional;
