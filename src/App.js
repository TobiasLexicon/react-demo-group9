import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { PersonList } from './components/PersonList';
import { SideBar } from './components/SideBar';

function App() {
  const [navigation, setNavigation] = useState(1);

  return (
    <div className='containerFull'>
      <Header changePage={setNavigation} />
      {navigation == 1 ? <Home /> : <PersonList />};
      <SideBar points='first'>
        <h1>Show me</h1>
      </SideBar>
    </div>
  );
}
export default App;
