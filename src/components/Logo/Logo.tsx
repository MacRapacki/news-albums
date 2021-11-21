import { LogoWrapper } from "./style";
import LogoSVG from "../../utilis/images/LogoBisons.svg";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <LogoWrapper to="/">
      <img src={LogoSVG} alt="Logo" />
    </LogoWrapper>
  );
};

export default Logo;
