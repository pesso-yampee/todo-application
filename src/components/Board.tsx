import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToList } from "../redux/taskSlice";
import { ChangeEvent, useState } from "react";
import { List } from "./List";
import "../css/board.css";

type Props = {
  category: string;
};

export function Board({ category }: Props) {
  const [isCreated, setIsCreated] = useState(false);
  const [text, setText] = useState("");
  const list = useAppSelector((state) => state.task.list);
  const disabled: boolean = text === "" ? true : false;
  const dispatch = useAppDispatch();

  function clickHandler() {
    setIsCreated(!isCreated);
  }
  function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }
  function addToListHandler() {
    dispatch(addToList({ text: text, category: category }));
  }
  function cancelCreating() {
    setText("");
    setIsCreated(false);
  }

  const eachCategoryList = (function filterListOfCategory() {
    const result = list.filter((item) => {
      return item.category === category;
    });

    return result;
  })();

  return (
    <div className="box">
      <div className="header">
        <span className="badge">{eachCategoryList.length}</span>
        <h2 className="title">{category}</h2>
        <button className="btn btn-create" type="button" onClick={clickHandler}>
          <FontAwesomeIcon icon={faCirclePlus} size="xl" color="#fff" />
        </button>
      </div>
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
          <button
            className="btn btn-add"
            type="button"
            disabled={disabled}
            onClick={addToListHandler}
          >
            <span>Add</span>
          </button>
          <button
            className="btn btn-cancel"
            type="reset"
            onClick={cancelCreating}
          >
            <span>Cancel</span>
          </button>
        </div>
      </div>
      <div className="contents">
        <List list={eachCategoryList} category={category} />
      </div>
    </div>
  );
}
