import './App.css';
import { Button } from './components/Button';
import { useState } from 'react';
import { Counter } from './components/Counter';
import { Header } from './components/Header';

function App() {
  const [serial, setSerial] = useState('Trial');
  const handleChange = () => setSerial(serial + ', trial');
  const dataValues = ['first', 'second', 'third'];

  return (
    <div className='App'>
      <h1>Welcome</h1>
      <Counter />

      {dataValues.map(ordinals => (
        <Header headerValue={ordinals} />
      ))}
      <h2>{serial}</h2>

      <Button change={setSerial} />
      <Button change={handleChange} />
    </div>
  );
}

export default App;
