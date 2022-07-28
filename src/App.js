import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import PersonalLogin from './pages/PersonalRegister';
import PersonalRegister from './pages/PersonalRegister';
import ResidencyInfo from './pages/ResidencyInfo';
import BankVerification from './pages/BankVerification';
import Success from './pages/Success';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register/personal-info' element={<PersonalRegister/>}/>
        <Route path='/register/residency-info' element={<ResidencyInfo/>}/>
        <Route path='/register/bank-verification' element={<BankVerification/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
    </div>
  );
}

export default App;
