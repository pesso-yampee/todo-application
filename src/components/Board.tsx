import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "redux/hooks";
import { useMemo, useState } from "react";
import List from "components/List";
import { InputBlock } from "components/InputBlock";
import "css/board.css";

type Props = {
  category: string;
};

export function Board({ category }: Props) {
  const [isCreated, setIsCreated] = useState(false);
  const list = useAppSelector((state) => state.task.list);
  const eachCategoryList = useMemo(() => {
    const result = list.filter((item) => {
      return item.category === category;
    });

    return result;
  }, [list]);

  function clickHandler() {
    setIsCreated(!isCreated);
  }

  return (
    <div className="box">
      <div className="header">
        <span className="badge">{eachCategoryList.length}</span>
        <h2 className="boxTitle">{category}</h2>
        <button className="btn btn-create" type="button" onClick={clickHandler}>
          <FontAwesomeIcon icon={faCirclePlus} size="xl" color="#fff" />
        </button>
      </div>
      <InputBlock
        category={category}
        isCreated={isCreated}
        setIsCreated={setIsCreated}
      />
      <div className="contents">
        <List list={eachCategoryList} category={category} />
      </div>
    </div>
  );
}
