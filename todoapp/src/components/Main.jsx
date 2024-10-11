// Main.jsx
import "./Main.css";
import Greeting from "./Greeting";
import photo from '../IMG/main.png'
import TasksBox from "./TasksBox";
function Main({ userName }) {
return (
    <div className="Main">
    <Greeting userName={userName} />
    <TasksBox />
    <img src={photo}></img>
    </div>
);
}

export default Main;
