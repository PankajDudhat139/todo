import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);

  useEffect(() => {
    setDouble(count * 2); // keep double in sync with count
  }, [count]);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-2">Count: {count}</h1>
      <h2 className="text-xl text-gray-600 mb-4">Double: {double}</h2>
      <div className="space-x-2">
        <button onClick={increment} className="px-4 py-2 bg-blue-500 text-white rounded">+</button>
        <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
        <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded">Reset</button>
      </div>
    </div>
  );
};

export default Counter;