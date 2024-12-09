import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatBox from './components/ChatBox.jsx';
import JoinBox from './components/JoinBox.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JoinBox />} />
        <Route path="/chat" element={<ChatBox />} />
      </Routes>
    </Router>
  );
};

export default App;
