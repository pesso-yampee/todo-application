import { useAppDispatch } from "redux/hooks";
import { addToList } from "redux/taskSlice";
import styles from "./AddButton.module.css";

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
      className={styles.btnAdd}
      type="button"
      disabled={disabled}
      onClick={addToListHandler}
    >
      <span>Add</span>
    </button>
  );
}
