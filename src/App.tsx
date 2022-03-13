import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/utilities/AppRouter/AppRouter';
import AppBar from './components/partials/AppBar/AppBar';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './styles/App.css';

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
