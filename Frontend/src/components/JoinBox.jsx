import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';



const JoinBox = () => {

  return (
    <div class="flex justify-center items-center min-h-screen bg-gray-900">
  <div class="w-full max-w-sm p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
    <h2 class="text-3xl font-semibold text-center text-yellow-400 mb-6">
      LOGIN TO JOIN CHAT
    </h2>

    <form>
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-300" id="username-label">Username</label>
        <input
          type="text"
          id="username"
          class="w-full mt-2 p-4 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Enter your username"
        />
      </div>

      <div class="mb-6">
        <label for="room" class="block text-sm font-medium text-gray-300" id="room-label">Room</label>
        <input
          type="text"
          id="room"
          class="w-full mt-2 p-4 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Enter room name"
        />
      </div>

      <button
        type="submit"
        class="w-full py-3 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        Login
      </button>
    </form>
  </div>
</div>



  );
};

export default JoinBox;
