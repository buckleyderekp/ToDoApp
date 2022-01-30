import React from 'react';
import { Route, Routes } from "react-router-dom";
import { TodoDashboard } from "./todoDashboard"

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/"  element={<TodoDashboard/>}/> 
        </Routes>
      </div>
  );
};

export default App;