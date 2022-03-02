import React, { useEffect } from 'react';
import AppRouter from './components/utilities/AppRouter/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './styles/App.css';
import AppBar from './components/partials/AppBar/AppBar';

function App() {

  useEffect(() => {
    M.AutoInit();
  }, [])

  return (
    <div className="App">
      <Router>
        <AppBar />
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
