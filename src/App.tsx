import ReactModal from "react-modal";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { Board } from "components/Board";
import { Modal } from "components/Modal";
import { Title } from "components/Title";
import styles from "./App.module.css";

ReactModal.setAppElement("#root");

export default function App() {
  return (
    <Provider store={store}>
      <div className={styles.App}>
        <div className={styles.container}>
          <Title />
          <div className={styles.boxContainer}>
            <Board category="TODO" />
            <Board category="Doing" />
            <Board category="Waiting" />
            <Board category="Done" />
          </div>
        </div>
        <Modal />
      </div>
    </Provider>
  );
}
