import { deleteItem } from "redux/taskSlice";
import { useAppDispatch } from "redux/hooks";
import { toggleShowModal } from "redux/modalSlice";
import { Button } from "ui/components/atoms/button";

export function DeleteButton() {
  const dispatch = useAppDispatch();

  function deleteHandler() {
    dispatch(deleteItem());
    dispatch(toggleShowModal());
  }

  return (
    <Button
      className="btnDelete"
      type="button"
      onClickEvent={deleteHandler}
      text="Delete"
      disabled={false}
    />
  );
}
