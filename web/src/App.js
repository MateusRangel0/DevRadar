import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

// 3 conceitos para saber o que é React
// 1. Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da 
//                aplicação quando criar? quando tem repetição de um trecho de código ou
//                quando se consegue isolar um pedaço da aplicação dentro de algo que não
//                influencie outros componentes. Primeira letra sempre maiúscula. 1 componente
//                por arquivo
// 2. Propriedade: Informações que um componente PAI passa para o componente FILHO
// 3. Estado: Informações mantidas pelo componente (Lembrar: imutabilidade do React)

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {

    const response = await api.post('/devs', data)
    
    setDevs([...devs, response.data]);
  }

  return (
    <div id ="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>        
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} /> 
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
