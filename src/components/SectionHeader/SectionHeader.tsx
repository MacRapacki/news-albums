import * as S from "./style";

interface SectionHeaderProps {
  text: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ text }) => {
  return (
    <S.Header>
      <S.HeaderTitle>{text}</S.HeaderTitle>
    </S.Header>
  );
};

export default SectionHeader;
