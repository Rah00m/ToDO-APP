import User from "./User";
import './Sidebar.css';
import logo from "../IMG/logo.png";
// import AddNew from "./AddNew";
// import Calendar from "./Calendar";

function Sidebar({onNameChange}) {
    return (
        <div className="Sidebar">
            <div className="brand">
                <img src={logo} alt="RomaVation Logo" /> {/* Added alt attribute for accessibility */}
                <h2>RomaVation</h2>
            </div>
            <User onNameChange={onNameChange} />
            {/* <hr style={{ marginTop :"20px", width:"180px" ,marginLeft:"10px"}}></hr> */}
            
            {/* <AddNew /> */}
            {/* <Calendar /> */}
        </div>
    );
}

export default Sidebar;
