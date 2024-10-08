// import Todos from "./Todos"
import './Main.css'
import Greeting from "./Greeting"
// import EditToDo from "./EditToDo"
function Main ({userName}){
    return(
    <div className="Main">
            <Greeting userName={userName}/>
    </div>
)}
export default Main;