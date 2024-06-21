import { useState, useEffect } from 'react';

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
