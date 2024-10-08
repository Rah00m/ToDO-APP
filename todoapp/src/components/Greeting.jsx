import "./Greeting.css"
import React, {useState, useEffect} from 'react';


function Greeting() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);
    return (
        // <div className='greeting'>
        <div className="greetingBox">
            <div className="overlay">
            <div className="Date">
        <p>
            {' '}
            {dateState.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            })}
            </p>
            <p>
            {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}
            </p>
            </div>
            </div>
        </div>
        
    
    );
}

export default Greeting;
