import { BackBtn } from "./style";

import ArrowIcon from "../../../utilis/images/arrow.svg";

interface GoBackBtnProps {}

const GoBackBtn: React.FC<GoBackBtnProps> = () => {
  return (
    <BackBtn to="/news">
      <img src={ArrowIcon} alt="Arrow Icon" />
    </BackBtn>
  );
};

export default GoBackBtn;
