// src/Hooks/use-find-name.js
import { useState, useEffect } from 'react';

/**
 * Custom hook to find a specific name in an array of names.
 * @param {Array<string>} namesArray - The array of names.
 * @param {string} targetName - The name to find in the array.
 * @returns {string|null} - The found name or null if not found.
 */
function useFindName(namesArray, targetName) {
  const [foundName, setFoundName] = useState(null);

  useEffect(() => {
    if (Array.isArray(namesArray) && typeof targetName === 'string') {
      const name = namesArray.find(name => name === targetName) || null;
      setFoundName(name);
    } else {
      setFoundName(null);
    }
  }, [namesArray, targetName]);

  return foundName;
}

export default useFindName;
