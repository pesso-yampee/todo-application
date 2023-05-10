import React from "react";

type Props = {
  isCreated: boolean;
  setIsCreated: React.Dispatch<React.SetStateAction<boolean>>;
};

function CancelButton({ isCreated, setIsCreated }: Props) {
  function cancelCreating() {
    setIsCreated(!isCreated);
  }

  return (
    <button className="btn btn-cancel" type="reset" onClick={cancelCreating}>
      <span>Cancel</span>
    </button>
  );
}

export default React.memo(CancelButton);