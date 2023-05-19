import React from "react";
import styles from "./CancelButton.module.css";

type Props = {
  isCreated: boolean;
  setIsCreated: React.Dispatch<React.SetStateAction<boolean>>;
};

function CancelCreateButton({ isCreated, setIsCreated }: Props) {
  function cancelCreating() {
    setIsCreated(!isCreated);
  }

  return (
    <button className={styles.btn} type="reset" onClick={cancelCreating}>
      <span>Cancel</span>
    </button>
  );
}

export default React.memo(CancelCreateButton);
