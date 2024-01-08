
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Main from './Pages/Main';
import Phq9 from './Pages/Phq9';
function App() {
  return (
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/main" element={<Main/>} />
      <Route path="/questionairre" element={<Phq9/>} />
      </Routes>
  )

}

export default App;
