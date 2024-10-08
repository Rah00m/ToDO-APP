// Main.jsx
import "./Main.css";
import Greeting from "./Greeting";
function Main({ userName }) {
return (
    <div className="Main">
    <Greeting userName={userName} />
    </div>
);
}

export default Main;
