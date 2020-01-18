import React, { useState } from 'react';

// 3 conceitos para saber o que é React
// 1. Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da 
//                aplicação quando criar? quando tem repetição de um trecho de código ou
//                quando se consegue isolar um pedaço da aplicação dentro de algo que não
//                influencie outros componentes. Primeira letra sempre maiúscula. 1 componente
//                por arquivo
// 2. Propriedade: Informações que um componente PAI passa para o componente FILHO
// 3. Estado: Informações mantidas pelo componente (Lembrar: imutabilidade do React)


function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }
  return (
    <>
    <h1>Contador: {counter}</h1>
    <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
