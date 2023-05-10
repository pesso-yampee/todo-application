import React, { ChangeEvent } from "react";
import { AddButton } from "./AddButton";
import CancelButton from "./CancelButton";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setText } from "../redux/taskSlice";

type Props = {
  category: string;
  isCreated: boolean;
  setIsCreated: React.Dispatch<React.SetStateAction<boolean>>;
};

export function InputBlock({ category, isCreated, setIsCreated }: Props) {
  const dispatch = useAppDispatch();
  const text = useAppSelector((state) => state.task.text);

  function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(setText(e.target.value));
  }

  return (
    <div
      className="textAreaWrap"
      style={{ display: isCreated ? "block" : "none" }}
    >
      <textarea
        className="textarea"
        rows={5}
        name=""
        id=""
        value={text}
        placeholder="Enter note"
        onChange={onChangeHandler}
      />
      <div className="btnBox">
        <AddButton category={category} />
        <CancelButton isCreated={isCreated} setIsCreated={setIsCreated} />
      </div>
    </div>
  );
}
