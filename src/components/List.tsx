import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { RemoveModal } from "./RemoveModal";
import "../css/list.css";
import { useState } from "react";

type Props = { list: { id: number; category: string; name: string }[] };

export function List({ list }: Props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModal() {
    setModalIsOpen(!modalIsOpen);
  }
  return (
    <>
      <ul className="list">
        {list.map((item) => (
          <li className="item" key={item.id}>
            <FontAwesomeIcon
              className="icon"
              icon={faCheckCircle}
              color="#333"
            />
            <span className="name">{item.name}</span>
            <button
              className="btn btn-delete"
              aria-label="delete"
              onClick={openModal}
            >
              <FontAwesomeIcon icon={faTrashCan} color="#333" />
            </button>
          </li>
        ))}
      </ul>
      {modalIsOpen && <RemoveModal />}
    </>
  );
}
