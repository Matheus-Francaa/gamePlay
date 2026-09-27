import { useState } from 'react';
import TelaDetalhes from './telas/TelaDetalhes';
import TelaInicial from './telas/TelaInicial';
import TelaLogin from './telas/TelaLogin';
import TelaAgendamento from './telas/TelaAgendamento';

export default function App() {
    const [tela, definirTela] = useState('login');

    if (tela === 'login') {
        return <TelaLogin onLogin={() => definirTela('home')} />;
    }

    if (tela === 'details') {
        return <TelaDetalhes onBack={() => definirTela('home')} />;
    }

    if (tela === 'schedule') {
        return <TelaAgendamento onBack={() => definirTela('home')} />;
    }

    return <TelaInicial onOpenDetails={() => definirTela('details')} onOpenSchedule={() => definirTela('schedule')} onLogout={() => definirTela('login')} />;
}