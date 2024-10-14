import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BirthdayGreeting = () => {
  const [name, setName] = useState(''); // You can remove this line if you don't need 'name'
  const navigate = useNavigate();

  const handleNavigateToMemories = () => {
    navigate('/gallery'); // Ensure the route is correctly defined in your app
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-300 to-purple-400 p-4">
      <div className="text-center bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-600 shadow-lg">
          Happy Birthday Sruthi!
        </h1>
        <button
          onClick={handleNavigateToMemories}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-lg transition duration-300 shadow-md w-full mt-4"
        >
          Go to Memories
        </button>
      </div>
    </div>
  );
};

export default BirthdayGreeting;
