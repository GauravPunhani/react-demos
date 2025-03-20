import './App.css';
import Dashboard from './Dashboard';
import withAuth from './withAuth';

function App() {
  const ProtectedDashboard = withAuth(Dashboard)
  return (
    <div className="App">
      <ProtectedDashboard/>
    </div>
  );
}

export default App;
