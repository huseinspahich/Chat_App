import React from 'react';
import { XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const InfoBox = ({ room }) => (
  <div className="flex items-center justify-between bg-gradient-to-br from-gray-800 via-gray-900 to-black text-yellow-400 px-4 py-2 rounded-md shadow-md w-full max-w-xl mx-auto mb-4">
    <div className="flex items-center">
      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
      <h3 className="text-lg font-semibold">{room}</h3>
    </div>
    <div>
      <a href="/" className="hover:text-red-500 transition-colors duration-200">
        <XMarkIcon className="h-5 w-5 text-yellow-400 hover:text-red-500" />
      </a>
    </div>
  </div>
);

export default InfoBox;
