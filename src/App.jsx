import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/Home";
import "./index.css";
import Todo from "./pages/Todo";
import ProtectedRoute from "./pages/Protected-Route";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/todo"
          element={
            <ProtectedRoute>
              <Todo />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={
            <RedirectToSignIn/>
          }
        />
        
      </Routes>
    </Router>
  );
};

export default App;
