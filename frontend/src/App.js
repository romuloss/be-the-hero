import React from 'react';

import './global.css'

import Routes from './routes';


function App() {
/* Exemplo de Estado
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>Contador {counter} Semana OnmiStack - Be The Hero </Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );*/

  return (
          <Routes />
    
  );

}

export default App;
