import React from 'react';
import { Route, Routes } from "react-router-dom";
import { TodoDashboard } from "./components/todoDashboard"

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/dashboard"  element={<TodoDashboard/>}/> 
        </Routes>
      </div>
  );
};

export default App;