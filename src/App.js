import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import PersonalLogin from './pages/PersonalRegister';
import PersonalRegister from './pages/PersonalRegister';
import ResidencyInfo from './pages/ResidencyInfo';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register/personal-info' element={<PersonalRegister/>}/>
        <Route path='/register/residency-info' element={<ResidencyInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
