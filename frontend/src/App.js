import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
      <Route path='/' component={Home} exact />
      <Route path='/create' component={Create} exact />
      <Route path='/login' component={Login} exact />
    </div>
  );
}

export default App;
