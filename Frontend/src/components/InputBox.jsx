import React from 'react';

const InputBox = ({ setMessage, sendMessage, message }) => (
  <form className="flex items-center justify-between bg-gradient-to-br from-gray-800 via-gray-900 to-black px-4 py-2 rounded-md shadow-md w-full max-w-xl mx-auto mt-4">
    <input
      className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyDown={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button
      className="ml-4 p-3 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      onClick={e => sendMessage(e)}
    >
      Send
    </button>
  </form>
);

export default InputBox;
