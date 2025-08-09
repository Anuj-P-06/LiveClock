import React, { useState, useEffect } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    // Timer: updates time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  useEffect(() => {
    // Update greeting when time changes
    const hour = time.getHours();
    if (hour < 12) {
      setGreeting("Good Morning ☀️");
    } else if (hour < 18) {
      setGreeting("Good Afternoon 🌤️");
    } else {
      setGreeting("Good Night 🌙");
    }
  }, [time]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 px-4">
      
      {/* Small top card */}
      <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md w-full max-w-md mb-6">
        <h2 className="text-lg font-semibold mb-2"> useEffect in this project</h2>
        <p className="text-sm">
          1️. First <code>useEffect</code> sets up a timer with <code>setInterval</code> to update the time every second, and cleans it up when unmounted. <br />
          2️. Second <code>useEffect</code> updates the greeting whenever the time changes.
        </p>
      </div>

      {/* Large clock card */}
      <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">{greeting}</h1>
        <h2 className="text-5xl font-mono">{time.toLocaleTimeString()}</h2>
      </div>
    </div>
  );
};

export default LiveClock;
