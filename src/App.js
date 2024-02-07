
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Main from './Pages/Main';
import Login from './Pages/Login';
import Mind_Compo from './Components/Minfullness/Mind_Compo';
import Exer_A from './Components/Minfullness/Exer_A';
import Exer_B from './Components/Minfullness/Exer_B';
import Exer_C from './Components/Minfullness/Exer_C';
import Exer_D from './Components/Minfullness/Exer_D';
import Exer_E from './Components/Minfullness/Exer_E';
function App() {
  return (
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/main" element={<Main/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/exerA" element={<Exer_A/>} />
      <Route path="/exerB" element={<Exer_B/>} />
      <Route path="/exerC" element={<Exer_C/>} />
      <Route path="/exerD" element={<Exer_D/>} />
      <Route path="/exerE" element={<Exer_E/>} />

      {/* <Route path="/mindfullness" element={<Mind_Compo/>} /> */}
      
      </Routes>
  )

}

export default App;
