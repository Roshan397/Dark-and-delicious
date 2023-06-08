import { Route, Routes } from 'react-router-dom';
import './App.css';
import Change from './components/Change';
import Landing from './components/Landing';
import Profile from './components/Profile';
import UserLogin from './components/UserLogin';
import UserSignUp from './components/UserSignup';
import Forget from './components/forget';

function App() {
  return (
    <Routes>
     <Route path="/" element={<UserLogin/>} />
     <Route path="/Home" element={<Landing/>} />
     <Route path="/forgetpass" element={<Forget/>} />
     <Route path="/change" element={<Change/>} />
     <Route path="/usersignup" element={<UserSignUp/>} />
     <Route path="/profile" element={<Profile/>} />
    </Routes>
  );
}

export default App;
