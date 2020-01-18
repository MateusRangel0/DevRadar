import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// 3 conceitos para saber o que é React
// 1. Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da 
//                aplicação quando criar? quando tem repetição de um trecho de código ou
//                quando se consegue isolar um pedaço da aplicação dentro de algo que não
//                influencie outros componentes. Primeira letra sempre maiúscula. 1 componente
//                por arquivo
// 2. Propriedade: Informações que um componente PAI passa para o componente FILHO
// 3. Estado: Informações mantidas pelo componente (Lembrar: imutabilidade do React)

function App() {
  return (
    <div id ="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>

          </div>

          <button type="submit">Salvar</button>
        </form>

      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/29546699?s=460&v=4" alt="Mateus Rangel"/>
              <div className="user-info">
                <strong>Mateus Rangel</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Computer Science graduating at Federal University of Campina Grande.</p>
            <a href="https://github.com/MateusRangel0">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/29546699?s=460&v=4" alt="Mateus Rangel"/>
              <div className="user-info">
                <strong>Mateus Rangel</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Computer Science graduating at Federal University of Campina Grande.</p>
            <a href="https://github.com/MateusRangel0">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/29546699?s=460&v=4" alt="Mateus Rangel"/>
              <div className="user-info">
                <strong>Mateus Rangel</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Computer Science graduating at Federal University of Campina Grande.</p>
            <a href="https://github.com/MateusRangel0">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/29546699?s=460&v=4" alt="Mateus Rangel"/>
              <div className="user-info">
                <strong>Mateus Rangel</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Computer Science graduating at Federal University of Campina Grande.</p>
            <a href="https://github.com/MateusRangel0">Acessar perfil no github</a>
          </li>
        </ul>
      </main>
      
    </div>
  );
}

export default App;
