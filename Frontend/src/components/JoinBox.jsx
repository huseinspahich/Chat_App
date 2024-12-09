import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JoinBox = () => {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-sm p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-yellow-400 mb-6">
          LOGIN TO JOIN CHAT
        </h2>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-300">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full mt-2 p-4 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="room" className="block text-sm font-medium text-gray-300">
            Room
          </label>
          <input
            type="text"
            id="room"
            className="w-full mt-2 p-4 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter room name"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>

        <Link onClick={(e) => { if (!username || !room) {e.preventDefault();}}}  to={`/chat?username=${username}&room=${room}`}>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default JoinBox;
