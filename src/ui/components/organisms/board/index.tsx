import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "redux/hooks";
import { useMemo, useState } from "react";
import List from "ui/components/organisms/list";
import { InputBlock } from "ui/components/organisms/inputBlock";
import styles from "./Board.module.css";

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
    <div className={styles.box}>
      <div className={styles.header}>
        <span className={styles.badge}>{eachCategoryList.length}</span>
        <h2 className={styles.boxTitle}>{category}</h2>
        <button
          className={styles.btnCreate}
          type="button"
          onClick={clickHandler}
        >
          <FontAwesomeIcon icon={faCirclePlus} size="xl" color="#fff" />
        </button>
      </div>
      <InputBlock
        category={category}
        isCreated={isCreated}
        setIsCreated={setIsCreated}
      />
      <div className={styles.contents}>
        <List list={eachCategoryList} category={category} />
      </div>
    </div>
  );
}
