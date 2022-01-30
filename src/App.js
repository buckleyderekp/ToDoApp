import React from 'react';
import logo from './logo.svg';
import * as firebase from "firebase/app";
import { Route, Redirect, Routes } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register"
import { TodoDashboard } from "./components/todoDashboard"

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/dashboard"  element={<TodoDashboard/>}/> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
  );
};

export default App;