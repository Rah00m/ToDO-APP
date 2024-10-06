import User from "./User";
import './Sidebar.css'
import logo from "../IMG/logo.png"
// import AddNew from "./AddNew";
// import Calendar from "./Calendar";

function Sidebar() {
    return (
        <div className="Sidebar">
            <img src={logo}/>
            <h2>RomaVation</h2>
            <User />
            {/* <hr style={{ marginTop :"20px", width:"180px" ,marginLeft:"10px"}}></hr> */}
            
            {/* <AddNew /> */}
            {/* <Calendar /> */}
        </div>
    );
}

export default Sidebar;
