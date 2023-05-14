import ReactModal from "react-modal";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { Board } from "components/Board";
import { Modal } from "components/Modal";
import { Title } from "components/Title";
import "css/styles.css";

ReactModal.setAppElement("#root");

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <Title />
          <div className="boxContainer">
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
