import React from 'react';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HelloWorld />} />
      </Routes>
  </Router>
  );
}

export default App;
