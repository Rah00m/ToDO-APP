import "./Greeting.css";
import React, { useState, useEffect } from 'react';
import greetBox from "../IMG/greetBox.png";
import WeatherData from './WeatherData'; 

function Greeting({ userName }) {
    const [dateState, setDateState] = useState(new Date());
    const [greeting, setGreeting] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Update the dateState every 30 seconds
        const intervalId = setInterval(() => setDateState(new Date()), 30000);
        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    useEffect(() => {
        const updateGreeting = () => {
            const hours = dateState.getHours();
            if (hours < 12) {
                setGreeting(`Good Morning, ${userName}!`);
                setMessage("Have a fruitful day ahead.🤩");
            } else if (hours < 18) {
                setGreeting(`Good Afternoon, ${userName}!`);
                setMessage("Go and accomplish your tasks.💫");
            } else {
                setGreeting(`Good Evening, ${userName}!`);
                setMessage("I hope your day was really productive.😍");
            }
        };

        updateGreeting();
    }, [dateState, userName]);

    return (
        <div className="greetingBox">
                        <img src={greetBox} alt="greetBox photo" /> 

            <div className="overlay">
                <div className="Date">
                    <p>{greeting}</p> {/* Display the greeting message */}
                    <p>{message}</p> {/* Display the additional message */}
                    {/* <p>
                        {dateState.toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                        })}
                    </p> */}
                    <p>
            {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}
            </p>
                </div>
            </div>
            <WeatherData />
        </div>
    );
}

export default Greeting;
