// import React,{useEffect ,useState} from 'react';
// import axios from 'axios'; 
// import './Weather.css'
// function weather() {
//     const [weather ,setWeather]=useState("");
//     const [loading ,setLoading]=useState("");
//     const fetchWeather =async ()=>{
//         try {
//             const apiKey =  process.env.REACT_APP_API_KEY;
//             const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=${apiKey}&units=metric`);
//             setWeather(response.data);
//             setLoading(false);
//         } catch (error) {
//             console.error("Error fetching weather data:", error);
//             setLoading(false);
//         }
//     };
//     useEffect(()=>{fetchWeather();},[]);
//     return (
//         <div className="weatherBox">
//             <div className='overlay'>
//         <div className='weather'>{
//             loading?(
//                 <p>Loading Weather....</p>
//             ):
//             weather?
//             (  <p>Current temperature in {weather.name}: {weather.main.temp}°C</p>):
//             (                <p>Error fetching weather data.</p>
//             )
//         }
        
//         </div>
//         </div>
//         </div>
//     );
// }

// export default weather;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Weather.css'
function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const apiKey = process.env.REACT_APP_API_KEY;
                const city = "cairo"; // Replace with your desired city
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
                setWeatherData(response.data);
            } catch (error) {
                setError('Error fetching weather data: ' + error.message);
            }
        };

        fetchWeather();
    }, []);

    if (error) return <div>{error}</div>;
    if (!weatherData) return <div>Loading...</div>;

    return (
        <div>
            <h1>Weather in {weatherData.name}</h1>
            <p>Temperature: {weatherData.main.temp} °C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
        </div>
    );
}

export default Weather;
