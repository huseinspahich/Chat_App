import React from 'react';
import { BrowseRouter as Router, Routes, Route } from 'react-router-dom';
import ChatBox from './components/ChatBox.jsx';
import JoinBox from './components/JoinBox.jsx';

const App = () => {
  return (
    <>
    <Router>
      <Route path="/" element={<JoinBox />} />
      <Route path="/chat" element={<ChatBox />} />
    </Router>
        
    </>
  );
};

export default App;
