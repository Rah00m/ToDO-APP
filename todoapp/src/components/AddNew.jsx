import { useState } from "react";
import Modal from "./Modal";
import'./AddNew.css';
import logo from '../IMG/task.png'
function AddNew() {
    const [showModal ,setShowModal]=useState(false);
    return (
        <div className="add-new">
            <img src={logo} className="taskicon"></img>
            <h3>Tasks </h3>
            <button className="btn"  onClick={()=>setShowModal(true)}>+</button>
            <Modal showModal={showModal}  setShowModal={setShowModal}
                Hello
           />
        </div>
    );
}

export default AddNew;
