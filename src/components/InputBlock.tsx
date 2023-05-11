import React, { ChangeEvent, useState } from "react";
import { AddButton } from "./AddButton";
import CancelCreateButton from "./CancelCreateButton";

type Props = {
  category: string;
  isCreated: boolean;
  setIsCreated: React.Dispatch<React.SetStateAction<boolean>>;
};

export function InputBlock({ category, isCreated, setIsCreated }: Props) {
  const [text, setText] = useState("");

  function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
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
      <div className="btnContainer">
        <AddButton text={text} category={category} />
        <CancelCreateButton isCreated={isCreated} setIsCreated={setIsCreated} />
      </div>
    </div>
  );
}
