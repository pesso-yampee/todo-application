import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "../redux/hooks";
import { setDeleteItemId, moveItem } from "../redux/taskSlice";
import { toggleShowModal } from "../redux/modalSlice";
import "../css/list.css";

type Props = {
  list: { id: string; category: string; name: string }[];
  category: string;
};

function List({ list, category }: Props) {
  const dispatch = useAppDispatch();
  const [isDragging, setIsDragging] = useState(false);
  const [isDroppable, setIsDroppable] = useState(false);

  function openModal(e: React.MouseEvent<HTMLButtonElement>) {
    dispatch(toggleShowModal());

    const targetId: string | null | undefined = (function getDeleteTargetId() {
      return e.currentTarget.parentElement && e.currentTarget.parentElement.id;
    })();

    if (typeof targetId === "string") {
      dispatch(setDeleteItemId(targetId));
    }
  }

  // ドラッグを発生したとき
  function onDragStart(event: React.DragEvent<HTMLLIElement>): void {
    if (event.currentTarget === null) return;
    event.dataTransfer.setData("text/plain", event.currentTarget.id);
    setIsDragging(true);
  }
  // ドラッグを放したとき
  function onDragEnd(event: React.DragEvent<HTMLLIElement>): void {
    setIsDragging(false);
  }
  // ドラッグがドロップ領域に入ったとき
  function onDragEnter(event: React.DragEvent<HTMLUListElement>): void {
    if (event.currentTarget === null) return;
    if (event.currentTarget.classList.contains("js-dropZone")) {
      setIsDroppable(true);
    }
  }
  // ドラッグがドロップ領域から離れたとき
  function onDragLeave(event: React.DragEvent<HTMLUListElement>): void {
    if (event.currentTarget === null) return;
    if (event.currentTarget.classList.contains("js-dropZone")) {
      setIsDroppable(false);
    }
  }
  // ドロップされたとき
  function onDrop(event: React.DragEvent<HTMLUListElement>): void {
    if (event.currentTarget === null) return;
    const dropZone = event.currentTarget as HTMLElement;
    const dropZoneCategory: string | undefined = dropZone.dataset.category;
    const id: string = event.dataTransfer.getData("text");

    if (dropZone.classList.contains("js-dropZone")) {
      typeof dropZoneCategory === "string" &&
        dispatch(
          moveItem({
            id: id,
            dropZoneCategory: dropZoneCategory,
          })
        );

      setIsDroppable(false);
    }
  }

  return (
    <>
      <ul
        className="list js-dropZone"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        data-category={category}
      >
        {list.map((item) => (
          <li
            className="item js-draggable"
            key={uuidv4()}
            id={item.id}
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            data-category={item.category}
          >
            <span className="name">{item.name}</span>
            <button
              className="btn btn-modalTrigger"
              aria-label="モーダルを開く"
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


export default React.memo(List);