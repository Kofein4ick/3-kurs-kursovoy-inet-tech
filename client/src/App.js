import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRoutes';
import NavBar from './components/Navbar';

function App() {
  return (
      <BrowserRouter>
      <NavBar />
      <AppRouter />
      </BrowserRouter>
  );
}

export default App;
