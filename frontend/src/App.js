import './App.css';
import {Route,Routes,useNavigate} from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import Final from './pages/final';
import RefereshHandler from './pages/refereshhandler';
import { useState } from 'react';

function App() {
  const Navigate=useNavigate();
  const [isAutthenticated, setIsAutthenticated] = useState(false);
  const PrivateRoute=({element})=>{
    return isAutthenticated?element:<Navigate to="/login" />
  }
  return (
    <div className="App">
      <h1>
        Auth app
      </h1>
      <Routes>
        <RefereshHandler setIsAuthenticated={setIsAutthenticated} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/final" element={<PrivateRoute element={<Final />} /> } />
      </Routes>
    </div>
  );
}

export default App;
