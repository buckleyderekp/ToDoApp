import React from 'react';
import { Route, Routes } from "react-router-dom";
import { TodoDashboard } from "./todoDashboard"

//this component manages the routing for the app. MVP will consist of the main dashboard but is intended to be built out 
//to include other routes like /login /register /settings
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