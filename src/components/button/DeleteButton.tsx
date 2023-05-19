import { deleteItem } from "redux/taskSlice";
import { useAppDispatch } from "redux/hooks";
import { toggleShowModal } from "redux/modalSlice";
import styles from "./DeleteButton.module.css";

export function DeleteButton() {
  const dispatch = useAppDispatch();

  function deleteHandler() {
    dispatch(deleteItem());
    dispatch(toggleShowModal());
  }

  return (
    <button className={styles.btn} type="button" onClick={deleteHandler}>
      <span>Delete</span>
    </button>
  );
}
