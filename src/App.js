import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from './features/authentication/Login';
import Register from "./features/authentication/Register";
import Home from "./features/home/Home";

function App() {
  return (
    <div className="App">
        <Routes>
        
        <Route
            path="/"
            element={
                <Login />
            }
          />
           
        <Route
            path="home"
            element={
                <Home />
            }
          />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
          </Routes>

    
    </div>
  );
}

export default App;
