import './styles.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Board } from './components/Board';

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
			</div>
		</Provider>
	);
}
