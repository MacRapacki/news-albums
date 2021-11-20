import { BackBtn } from "./style";

interface GoBackBtnProps {}

const GoBackBtn: React.FC<GoBackBtnProps> = () => {
  return <BackBtn to="/news">{"<"}</BackBtn>;
};

export default GoBackBtn;
