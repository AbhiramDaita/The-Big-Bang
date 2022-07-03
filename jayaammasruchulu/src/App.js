
import './App.css';
import {BrowserRouter , Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import VerificationPage from './pages/VerificationPage';
import PasswordResetPage from './pages/PasswordResetPage';
import TermsPage from './pages/TermsPage';
import PageNotFound from './pages/PageNotFound';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import Products from './pages/Products';
import BottomSheet from './components/BottomSheet';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route  index element={<Home/>}/>
          <Route path="login" element={<LoginPage/>} exact/>
          <Route path="SignUp" element={<SignupPage/>} exact/>
          <Route path="verification" element={<VerificationPage/>}/>
          <Route path="passwordReset" element={<PasswordResetPage/>} />
          <Route path="conditions" element={<TermsPage />} />
          <Route path="404" element={<PageNotFound />} />
          <Route path="ProductPage" element={<ProductPage />} />
          <Route path="ProfilePage" element={<ProfilePage />} />
          <Route path="Products" element={<Products />} />
          <Route path="BottomSheet" element={<BottomSheet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
