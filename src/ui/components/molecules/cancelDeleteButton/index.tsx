import { useAppDispatch } from "redux/hooks";
import { toggleShowModal } from "redux/modalSlice";
import { Button } from "ui/components/atoms/button";

export function CancelDeleteButton() {
  const dispatch = useAppDispatch();

  function closeModal() {
    dispatch(toggleShowModal());
  }

  return (
    <Button
      className="btn"
      type="reset"
      onClickEvent={closeModal}
      text="Cancel"
      disabled={false}
    />
  );
}
