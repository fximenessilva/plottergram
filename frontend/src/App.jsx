import React from 'react';
import Header from './components/header/Header';
import LoginButton from './components/a/LoginButton';
import LogoutButton from './components/a/LogoutButton';
import Profile from './components/a/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
