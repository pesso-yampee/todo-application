import { useAppDispatch } from "redux/hooks";
import { toggleShowModal } from "redux/modalSlice";
import styles from "./CancelButton.module.css";

export function CancelDeleteButton() {
  const dispatch = useAppDispatch();

  function closeModal() {
    dispatch(toggleShowModal());
  }
  
  return (
    <button className={styles.btn} type="reset" onClick={closeModal}>
      <span>Cancel</span>
    </button>
  );
}
