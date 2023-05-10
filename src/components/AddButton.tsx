import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToList } from "../redux/taskSlice";

type Props = {
  category: string;
};

export function AddButton({ category }: Props) {
  const text = useAppSelector((state) => state.task.text);
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