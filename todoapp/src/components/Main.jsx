// Main.jsx
import "./Main.css";
import Greeting from "./Greeting";
import photo from '../IMG/main.png'
function Main({ userName }) {
return (
    <div className="Main">
    <Greeting userName={userName} />
    <img src={photo}></img>
    </div>
);
}

export default Main;
