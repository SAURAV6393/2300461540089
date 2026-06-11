import React, { useEffect } from 'react';
import { Log } from 'logging_middleware';

function App() {
  useEffect(() => {
    Log("frontend", "info", "page", "Notification app frontend loaded");
  }, []);

  const handleClick = () => {
    Log("frontend", "debug", "component", "User clicked the test button");
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Notification App</h1>
      <button onClick={handleClick}>Test Action</button>
    </div>
  );
}

export default App;