import { Route, Routes } from 'react-router-dom';

import RightPanel from './components/common/right-panel';
import Sidebar from './components/common/sidebar';

import HomePage from './pages/auth/home/home-page';
import LoginPage from './pages/auth/login/login-page';
import SignUpPage from './pages/auth/signup/sign-up-page';
import NotificationPage from './pages/notification/notification-page';
import ProfilePage from './pages/profile/profile-page';

function App() {
    return (
        <div className='flex max-w-6xl mx-auto'>
            {/* Common component, bc its not wrapped with Routes */}
            <Sidebar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/notifications' element={<NotificationPage />} />
                <Route path='/profile/:username' element={<ProfilePage />} />
            </Routes>
            <RightPanel />
        </div>
    );
}

export default App;
