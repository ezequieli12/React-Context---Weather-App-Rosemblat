import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const ModeToggle = () => {
  const { mode, setMode } = useContext(WeatherContext);

  return (
    <button onClick={setMode}>
      Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ModeToggle;
