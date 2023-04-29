import ReactModal from "react-modal";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleModal, deleteTask } from "../redux/taskSlice";
import "../css/modal.css";

export function Modal() {
  const modalIsOpen = useAppSelector((state) => state.task.modalIsOpen);
  const dispatch = useAppDispatch();

  function deleteHandler() {
    dispatch(deleteTask());
    dispatch(toggleModal());
  }

  function closeModal() {
    dispatch(toggleModal());
  }

  return (
    <ReactModal isOpen={modalIsOpen} ariaHideApp={false}>
      <p>Are you sure delete?</p>
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
