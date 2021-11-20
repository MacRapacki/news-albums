import { LogoImg } from "./style";
import LogoSVG from "../../utilis/images/LogoBisons.svg";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return <LogoImg src={LogoSVG} alt="Logo" />;
};

export default Logo;
