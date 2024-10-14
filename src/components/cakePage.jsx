import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CakePage = () => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [secondsRemaining, setSecondsRemaining] = useState(5);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setSecondsRemaining((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          return 0; // Stop countdown at 0
        }
      });
    }, 1000);

    const candleBlowOutTimer = setTimeout(() => {
      setCandlesLit(false); // Blow out the candles after 6 seconds
    }, 6000);

    return () => {
      clearInterval(countdownTimer); // Cleanup countdown timer
      clearTimeout(candleBlowOutTimer); // Cleanup candle blow out timer
    };
  }, []);

  // Function to handle button click
  const handleCelebration = () => {
    navigate('/fireworks'); // Navigate to the Fireworks page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-200 p-4 overflow-hidden">
      <div className="flex flex-col items-center relative">
        {/* Cake Layers */}
        <div className="w-64 sm:w-72 md:w-80 lg:w-96 h-10 bg-gradient-to-b from-pink-300 to-pink-500 rounded-t-lg shadow-lg"></div>
        <div className="w-64 sm:w-72 md:w-80 lg:w-96 h-10 bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-lg"></div>
        <div className="w-64 sm:w-72 md:w-80 lg:w-96 h-10 bg-gradient-to-b from-orange-300 to-orange-500 shadow-lg"></div>
        <div className="w-64 sm:w-72 md:w-80 lg:w-96 h-10 bg-gradient-to-b from-red-300 to-red-500 shadow-lg"></div>
        <div className="w-64 sm:w-72 md:w-80 lg:w-96 h-10 bg-gradient-to-b from-red-600 to-red-700 shadow-lg rounded-b-lg"></div>

        {/* Candles */}
        <div className="absolute flex space-x-3 -top-5"> {/* Adjusted position to touch the cake */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="w-2 h-12 bg-white rounded-md shadow-md relative">
              {candlesLit && (
                <div className="absolute w-4 h-6 bg-gradient-to-b from-yellow-300 to-orange-400 rounded-full top-[-10px] left-1/2 transform -translate-x-1/2 animate-flicker-flame"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Timer */}
      <div className="mt-8 text-2xl font-bold">
        Blow out in: {secondsRemaining} seconds
      </div>

      {/* Go to Celebration Button */}
      <button
        onClick={handleCelebration}
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Go to Celebration
      </button>

      {/* Custom Keyframe Animation for Flame */}
      <style>{`
        @keyframes flicker-flame {
          0% { transform: scale(1) translateX(-50%); opacity: 1; }
          50% { transform: scale(1.05) translateX(-50%); opacity: 0.9; }
          100% { transform: scale(1.1) translateX(-50%); opacity: 0.8; }
        }

        .animate-flicker-flame {
          animation: flicker-flame 1.5s infinite alternate;
        }

        .rounded-full {
          border-radius: 50% 50% 40% 40%; /* Inverted drop shape for the flame */
        }
      `}</style>
    </div>
  );
};

export default CakePage;
