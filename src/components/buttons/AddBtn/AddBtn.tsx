import { AddCommentBtn } from "./style";

interface AddBtnProps {
  onclick: () => void;
}

const AddBtn: React.FC<AddBtnProps> = ({ onclick }) => {
  return <AddCommentBtn onClick={onclick}>Add</AddCommentBtn>;
};

export default AddBtn;
