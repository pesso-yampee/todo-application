import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { removeText, addList, addText } from '../redux/addTaskSlice';
import { ChangeEvent, useState } from 'react';
import { List } from './List';
import '../css/board.css';

type Props = {
	category: string;
};

export function Board({ category }: Props) {
	const [isCreated, setIsCreated] = useState(false);
	const [text, setText] = useState('');

	const list = useAppSelector((state) => state.addTask.list);
	const disabled: boolean = text === '' ? true : false;
	const dispatch = useAppDispatch();

	function clickHandler() {
		setIsCreated(!isCreated);
	}
	function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
		setText(e.target.value);
		dispatch(addText(e.target.value));
	}
	function addListHandler() {
		dispatch(addList(category));
	}
	function cancelHandler() {
		setText('');
		setIsCreated(false);
	}

	function filterListLengthOfCategory() {
		const result = list.filter((item) => {
			return item.category === category;
		});

		return result;
	}
	const filteredArray = filterListLengthOfCategory();
	// console.log(filteredArray);
	return (
		<div className="box">
			<div className="header">
				<span className="badge">{filteredArray.length}</span>
				<h2 className="title">{category}</h2>
				<button className="createButton" type="button" onClick={clickHandler}>
					<FontAwesomeIcon icon={faCirclePlus} size="xl" />
				</button>
			</div>
			<div className="contents">
				<div className="contentsInner">
					<div style={{ display: isCreated ? 'block' : 'none' }}>
						<textarea
							className="textarea"
							rows={5}
							name=""
							id=""
							value={text}
							placeholder="Enter note"
							onChange={onChangeHandler}
						/>
						<div className="btnBox">
							<button
								className="btn btn-add"
								type="button"
								disabled={disabled}
								onClick={addListHandler}>
								<span>Add</span>
							</button>
							<button
								className="btn btn-cancel"
								type="reset"
								onClick={cancelHandler}>
								<span>Cancel</span>
							</button>
						</div>
						<List list={filteredArray} />
					</div>
				</div>
			</div>
		</div>
	);
}
