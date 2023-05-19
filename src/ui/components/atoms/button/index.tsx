import styles from "./Button.module.css";

type Props = {
  className: string;
  type: "button" | "submit" | "reset" | undefined;
  onClickEvent: () => void;
  text: string;
  disabled: boolean | undefined;
};

export function Button({
  className,
  type,
  onClickEvent,
  text,
  disabled,
}: Props) {
  return (
    <button
      className={styles[className]}
      type={type}
      onClick={onClickEvent}
      disabled={disabled}
    >
      <span>{text}</span>
    </button>
  );
}
