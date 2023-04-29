import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Board } from "./components/Board";
import { Modal } from "./components/Modal";
import ReactModal from "react-modal";
import "./styles.css";

ReactModal.setAppElement("#root");

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <Board category="TODO" />
          <Board category="Doing" />
          <Board category="Waiting" />
          <Board category="Done" />
        </div>
        <Modal />
      </div>
    </Provider>
  );
}
