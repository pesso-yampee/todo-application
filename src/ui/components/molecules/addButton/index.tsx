import { useAppDispatch } from "redux/hooks";
import { addToList } from "redux/taskSlice";
import { Button } from "ui/components/atoms/button";

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
    <Button
      className="btnAdd"
      type="button"
      onClickEvent={addToListHandler}
      text="Add"
      disabled={disabled}
    />
  );
}
