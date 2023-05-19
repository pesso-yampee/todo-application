import ReactModal from "react-modal";
import { useAppSelector } from "redux/hooks";
import { DeleteButton } from "ui/components/molecules/deleteButton";
import { CancelDeleteButton } from "ui/components/molecules/cancelDeleteButton";
import styles from "./Modal.module.css";

export function Modal() {
  const modalIsOpen = useAppSelector((state) => state.modal.modalIsOpen);
  const customModalStyles = {
    content: {
      inset: "0",
      width: "400px",
      height: "300px",
      margin: "auto",
    },
  };

  return (
    <ReactModal
      isOpen={modalIsOpen}
      style={customModalStyles}
      ariaHideApp={false}
    >
      <h2>Are you sure delete?</h2>
      <div className={styles.btnContainer}>
        <DeleteButton />
        <CancelDeleteButton />
      </div>
    </ReactModal>
  );
}
