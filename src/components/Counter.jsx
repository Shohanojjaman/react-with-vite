import { useState } from 'react';
function Counter() {
  const [Count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = Count + 1;
    setCount(newCount);
  };
  const handleReduce = () => {
    const newCount = Count - 1;
    setCount(newCount);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h3>Count: {Count}</h3>
      <button onClick={handleAdd} style={{ marginInline: '10px' }}>
        Add
      </button>
      <button onClick={handleReduce} style={{ marginInline: '10px' }}>
        Reduce
      </button>
      <button onClick={handleReset} type="reset" style={{ marginInline: '10px' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
