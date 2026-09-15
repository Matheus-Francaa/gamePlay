import { useState } from 'react';
import DetailsScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ScheduleScreen from './screens/ScheduleScreen';

export default function App() {
    const [screen, setScreen] = useState('login');

    if (screen === 'login') {
        return <LoginScreen onLogin={() => setScreen('home')} />;
    }

    if (screen === 'details') {
        return <DetailsScreen onBack={() => setScreen('home')} />;
    }

    if (screen === 'schedule') {
        return <ScheduleScreen onBack={() => setScreen('home')} />;
    }

    return <HomeScreen onOpenDetails={() => setScreen('details')} onOpenSchedule={() => setScreen('schedule')} onLogout={() => setScreen('login')} />;
}