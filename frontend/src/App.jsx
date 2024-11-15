import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/auth/home/home-page';
import LoginPage from './pages/auth/login/login-page';
import SignUpPage from './pages/auth/signup/sign-up-page';

function App() {
    return (
        <div className='flex max-w-6xl mx-auto'>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </div>
    );
}

export default App;
