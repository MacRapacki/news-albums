import { AddCommentBtn, SmallDeviceText, BigDeviceText } from "./style";

interface AddBtnProps {
  onclick: () => void;
}

const AddBtn: React.FC<AddBtnProps> = ({ onclick }) => {
  return (
    <AddCommentBtn onClick={onclick}>
      <SmallDeviceText>Add</SmallDeviceText>
      <BigDeviceText>Add comment</BigDeviceText>
    </AddCommentBtn>
  );
};

export default AddBtn;
