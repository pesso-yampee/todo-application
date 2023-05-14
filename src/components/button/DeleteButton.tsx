import { deleteItem } from "redux/taskSlice";
import { useAppDispatch } from "redux/hooks";
import { toggleShowModal } from "redux/modalSlice";

export function DeleteButton() {
  const dispatch = useAppDispatch();

  function deleteHandler() {
    dispatch(deleteItem());
    dispatch(toggleShowModal());
  }

  return (
    <button className="btn btn-delete" type="button" onClick={deleteHandler}>
      <span>Delete</span>
    </button>
  );
}
