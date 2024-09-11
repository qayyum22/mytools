import React,{useState} from "react";
import '../styles/sidebar.css';


const Sidebar = () => {
    const [activeTool, setActiveTool] = useState('chat');

    const fetchWeather = async (location) => {
        // API call here
        return `It's raining cats and dogs in ${location}!`;
      };

      const calculator = (input) => {
        // Basic eval or math.js for safety
        return `The result is: ${eval(input)}`;
      };

      const getJoke = () => {
        // Either from an array or API
        return "Why don't programmers like nature? It has too many bugs.";
      };

      const botResponse = (userInput) => {
        switch(activeTool) {
          case 'weather':
            return fetchWeather(userInput);
          case 'calculator':
            return calculator(userInput);
          case 'joke':
            return getJoke();
          default:
            return `Default chat response to: ${userInput}`;
        }
      };

    return (
        <div style={{ height: '100%', width: "20%", backgroundColor: "lightgray" }}>
            <div className="sidebar">
                <button onClick={() => setActiveTool('weather')}>Weather</button>
                <button onClick={() => setActiveTool('calculator')}>Calculator</button>
                <button onClick={() => setActiveTool('joke')}>Joke</button>
            </div>
        </div>
    );
};

export default Sidebar;