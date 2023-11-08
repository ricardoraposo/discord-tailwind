import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" Component={ Login } />
      <Route path="/dashboard" Component={ Dashboard } />
    </Routes>
  );
}

export default App;
