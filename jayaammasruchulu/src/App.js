
import './App.css';
import {BrowserRouter , Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import VerificationPage from './pages/VerificationPage';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route  index element={<Home/>}/>
          <Route path="login" element={<LoginPage/>} exact/>
          <Route path="SignUp" element={<SignupPage/>} exact/>
          <Route path="verification" element={<VerificationPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
