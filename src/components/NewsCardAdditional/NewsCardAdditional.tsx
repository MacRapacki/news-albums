import ReadMOreBtn from "../buttons/ReadMoreBtn/ReadMoreBtn";
import LikesCommentsCounter from "../LikesCommentsCounter/LikesCommentsCounter";

import { Wrapper } from "./style";

interface NewsCardAdditionalProps {}

const NewsCardAdditional: React.FC<NewsCardAdditionalProps> = () => {
  return (
    <Wrapper>
      <LikesCommentsCounter />
      <ReadMOreBtn />
    </Wrapper>
  );
};

export default NewsCardAdditional;
