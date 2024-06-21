// src/components/NameFinder.jsx
import React, { useState } from 'react';
import { useFindName } from "../hooks/use-find-name.jsx"

function NameFinder() {
  const names = ["Peace", 'Hillary', 'Pammy', 'Dinana'];
  const [targetName, setTargetName] = useState('Peace');
  const [inputName, setInputName] = useState('');
  const foundName = useFindName(names, targetName);

  const refreshName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setTargetName(names[randomIndex]);
  };

  const filterName = () => {
    setTargetName(inputName);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Search Name Engine
        </h1>
        <div className="text-center mb-4">
          {foundName ? (
            <p className="text-lg font-medium text-custom-green">
              Found name: {foundName}
            </p>
          ) : (
            <p className="text-lg font-medium text-custom-red">
              Name not found
            </p>
          )}
        </div>
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={refreshName}
            className="bg-custom-blue text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
          >
            Refresh Name
          </button>
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Enter name"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={filterName}
            className="bg-custom-green text-white px-4 py-2 rounded-md shadow hover:bg-green-600 transition"
          >
            Filter Name
          </button>
        </div>
      </div>
    </div>
  );
}

export default NameFinder;
