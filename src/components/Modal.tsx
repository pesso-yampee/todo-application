import ReactModal from "react-modal";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { deleteItem } from "../redux/taskSlice";
import { toggleShowModal } from "../redux/modalSlice";
import "../css/modal.css";

export function Modal() {
  const modalIsOpen = useAppSelector((state) => state.task.modalIsOpen);
  const dispatch = useAppDispatch();
  const customModalStyles = {
    content: {
      inset: "0",
      width: "400px",
      height: "300px",
      margin: "auto",
    },
  };

  function deleteHandler() {
    dispatch(deleteItem());
    dispatch(toggleShowModal());
  }

  function closeModal() {
    dispatch(toggleShowModal());
  }

  return (
    <ReactModal
      isOpen={modalIsOpen}
      style={customModalStyles}
      ariaHideApp={false}
    >
      <h2>Are you sure delete?</h2>
      <div className="btnBox">
        <button
          className="btn btn-delete"
          type="button"
          onClick={deleteHandler}
        >
          <span>Delete</span>
        </button>
        <button className="btn btn-cancel" type="reset" onClick={closeModal}>
          <span>Cancel</span>
        </button>
      </div>
    </ReactModal>
  );
}
