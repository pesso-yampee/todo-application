import { Button } from "ui/components/atoms/button";

type Props = {
  isCreated: boolean;
  setIsCreated: React.Dispatch<React.SetStateAction<boolean>>;
};

export function CancelCreateButton({ isCreated, setIsCreated }: Props) {
  function cancelCreating() {
    setIsCreated(!isCreated);
  }

  return (
    <Button
      className="btn"
      type="reset"
      onClickEvent={cancelCreating}
      text="Cancel"
      disabled={false}
    />
  );
}
