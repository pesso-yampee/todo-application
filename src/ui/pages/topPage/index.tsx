import ReactModal from "react-modal";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { Board } from "ui/components/organisms/board";
import { Modal } from "ui/components/organisms/modal";
import { PageTitle } from "ui/components/atoms/pageTitle";
import styles from "./style.module.css";

ReactModal.setAppElement("#root");

export default function TopPage() {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <PageTitle />
        <div className={styles.boxContainer}>
          <Board category="TODO" />
          <Board category="Doing" />
          <Board category="Waiting" />
          <Board category="Done" />
        </div>
      </div>
      <Modal />
    </Provider>
  );
}
