import { useAppDispatch } from "../redux/hooks";
import { toggleShowModal } from "../redux/modalSlice";

export function CancelDeleteButton() {
  const dispatch = useAppDispatch();

  function closeModal() {
    dispatch(toggleShowModal());
  }
  
  return (
    <button className="btn btn-cancel" type="reset" onClick={closeModal}>
      <span>Cancel</span>
    </button>
  );
}
