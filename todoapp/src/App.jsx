import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  const [userName, setUserName] = useState("");

  const handleNameChange = (name) => {
      setUserName(name); // Update the userName state when it changes in User component
  };
  return (
    <div className="App">
      <Sidebar  onNameChange={handleNameChange}/>
      <Main userName={userName}/>
    </div>
  );
}

export default App;
