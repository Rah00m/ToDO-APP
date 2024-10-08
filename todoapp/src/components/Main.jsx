// Main.jsx
import "./Main.css";
import Greeting from "./Greeting";
import Weather from './Weather'; 
function Main({ userName }) {
  return (
    <div className="Main">
    <Greeting userName={userName} />
    <Weather />
    </div>
);
}

export default Main;
