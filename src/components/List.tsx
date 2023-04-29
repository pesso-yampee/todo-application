import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "../redux/hooks";
import { toggleModal, setDeleteTargetId } from "../redux/taskSlice";
import "../css/list.css";

type Props = { list: { id: string; category: string; name: string }[] };

export function List({ list }: Props) {
  const dispatch = useAppDispatch();

  function openModal(e: React.MouseEvent<HTMLButtonElement>) {
    dispatch(toggleModal());

    const targetId: string | null | undefined = (function getDeleteTargetId() {
      return (
        e.currentTarget.parentElement &&
        e.currentTarget.parentElement.dataset.id
      );
    })();

    if (typeof targetId === "string") {
      dispatch(setDeleteTargetId(targetId));
    }
  }

  return (
    <>
      <ul className="list">
        {list.map((item) => (
          <li className="item" key={uuidv4()} data-id={item.id}>
            <FontAwesomeIcon
              className="icon"
              icon={faCheckCircle}
              color="#333"
            />
            <span className="name">{item.name}</span>
            <button
              className="btn btn-delete"
              aria-label="delete"
              onClick={(e) => {
                openModal(e);
              }}
            >
              <FontAwesomeIcon icon={faTrashCan} color="#333" />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
