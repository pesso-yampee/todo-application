import { useState } from 'react';
import Modal from 'react-modal';

export function RemoveModal() {
	const [modalIsOpen, setModalIsOpen] = useState(true);
	function deleteHandler() {}

	function closeModal() {
		setModalIsOpen(!modalIsOpen);
	}
	return (
		<Modal isOpen={modalIsOpen}>
			<p>Are you sure delete?</p>
			<div className="btnBox">
				<button className="btn btn-add" type="button" onClick={deleteHandler}>
					<span>Delete</span>
				</button>
				<button className="btn btn-cancel" type="reset" onClick={closeModal}>
					<span>Cancel</span>
				</button>
			</div>
		</Modal>
	);
}
