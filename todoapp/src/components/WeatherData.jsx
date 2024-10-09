import React,{useEffect ,useState} from 'react';
import axios from 'axios'; 
import './Weather.css'
import weathericon from "../IMG/weather.png";


function WeatherData() {
    const [weather ,setWeather]=useState(null);
    const [loading ,setLoading]=useState("");
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        // Update the dateState every 30 seconds
        const intervalId = setInterval(() => setDateState(new Date()), 30000);
        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);
    const fetchWeather =async ()=>{
        try {
            
            const apiKey = "5096cb5a2200c8de68c177bee49770d3"; 
            // const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=${apiKey}&units=metric`);
            console.log("API Key:", apiKey); // تأكد من أن المفتاح يظهر في وحدة التحكم
            setWeather(response.data);
            console.log("Weather Object:", response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setLoading(false);
        }
    };
    useEffect(()=>{fetchWeather();},[]);
    return (
        <div className="weatherBox">
            <div className='overlay'>
        <div className='weather'>{
            loading?(
                <p>Loading Weather....</p>
            ):
            weather?
            (<div className='Data'>
                
                    {/* Weather Icon */}
                    {weather.weather && weather.weather.length > 0 && (
                            <img
                            src={weathericon}
                            alt={"waether icon"} // Descriptive alt text
                            className="weather-icon"
                        />
                            )}
                <p>{weather.main.temp}°C</p>
                <p>{weather.weather[0].description}</p>
            <p> {weather.name +' '}
            {dateState.toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                        })}
                        </p></div>):
            (                <p>Error fetching weather data.</p>
            )
        }
        
        </div>
        </div>
        </div>
    );
}

export default WeatherData;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Weather.css'
// function Weather() {
//     const [weatherData, setWeatherData] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchWeather = async () => {
//             try {
//                 const apiKey = process.env.REACT_APP_API_KEY;
//                 const city = "cairo"; // Replace with your desired city
//                 const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
//                 setWeatherData(response.data);
//             } catch (error) {
//                 setError('Error fetching weather data: ' + error.message);
//             }
//         };

//         fetchWeather();
//     }, []);

//     if (error) return <div>{error}</div>;
//     if (!weatherData) return <div>Loading...</div>;

//     return (
//         <div>
//             <h1>Weather in {weatherData.name}</h1>
//             <p>Temperature: {weatherData.main.temp} °C</p>
//             <p>Weather: {weatherData.weather[0].description}</p>
//         </div>
//     );
// }

// export default Weather;
