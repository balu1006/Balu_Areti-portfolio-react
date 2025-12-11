import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-dark-bg text-white">
      <Sidebar />
      <main className="flex-1 md:ml-72 transition-all duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
