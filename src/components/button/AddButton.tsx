import { useAppDispatch } from "redux/hooks";
import { addToList } from "redux/taskSlice";

type Props = {
  text: string;
  category: string;
};

export function AddButton({ text, category }: Props) {
  const disabled: boolean = text === "" ? true : false;
  const dispatch = useAppDispatch();

  function addToListHandler() {
    dispatch(addToList({ text: text, category: category }));
  }

  return (
    <button
      className="btn btn-add"
      type="button"
      disabled={disabled}
      onClick={addToListHandler}
    >
      <span>Add</span>
    </button>
  );
}
