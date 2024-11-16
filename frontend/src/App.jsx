import { Navigate, Route, Routes } from 'react-router-dom';

import RightPanel from './components/common/right-panel';
import Sidebar from './components/common/sidebar';

import { useQuery } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import HomePage from './pages/auth/home/home-page';
import LoginPage from './pages/auth/login/login-page';
import SignUpPage from './pages/auth/signup/sign-up-page';
import NotificationPage from './pages/notification/notification-page';
import ProfilePage from './pages/profile/profile-page';
import LoadingSpinner from './components/common/loading-spinner';

function App() {
    const { data: authUser, isLoading } = useQuery({
        queryKey: ['authUser'],
        queryFn: async () => {
            try {
                const res = await fetch('/api/auth/me');
                const data = await res.json();
                if (data.error) return null;
                if (!res.ok) throw new Error(data.error || 'Something went wrong');
                console.log('authUser is here: ', data);
                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
        retry: false,
    });

    if (isLoading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <LoadingSpinner size='lg' />
            </div>
        );
    }

    return (
        <div className='flex max-w-6xl mx-auto'>
            {/* Common component, bc its not wrapped with Routes */}
            {authUser && <Sidebar />}
            <Routes>
                <Route path='/' element={authUser ? <HomePage /> : <Navigate to='/login' />} />
                <Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to='/' />} />
                <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to='/' />} />
                <Route
                    path='/notifications'
                    element={authUser ? <NotificationPage /> : <Navigate to='/login' />}
                />
                <Route
                    path='/profile/:username'
                    element={authUser ? <ProfilePage /> : <Navigate to='/login' />}
                />
            </Routes>
            {authUser && <RightPanel />}
            <Toaster />
        </div>
    );
}

export default App;
