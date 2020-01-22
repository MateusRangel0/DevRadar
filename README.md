<img src="https://arturkilldragon.files.wordpress.com/2019/06/omnistack-wallpaper-1920x1080.png"></img>
<h1 align="center">DevRadar</h1>
<p align="center">
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="Versão do React" href="https://github.com/facebook/react/blob/master/CHANGELOG.md#16120-november-14-2019">
    <img src="https://img.shields.io/badge/react-16.12.0-informational?logo=react"></img>
  </a>
  <a aria-label="Versão do Expo" href="https://www.npmjs.com/package/expo-cli/v/3.11.5">
    <img src="https://img.shields.io/badge/expo--CLI-3.11.5-informational?logo=expo"></img>
  </a>
 </p> 

<h1> Sobre o projeto </h1>

O "Google maps de desenvolvedores". DevRadar é um projeto que visa facilitar o encontro entre desenvolvedores, por meio de geolocalização, seja para fins de trabalho ou mesmo para trocar conhecimento sobre tecnologias.

## Frontend
<p align="center">
  <img src="https://i.imgur.com/ApzRRAR.png" height="600" width="900"></img>
</p>

#### Página Responsiva
<p align="center">
  <img src="https://i.imgur.com/jsWOz2l.png" height="600" width="465"></img>
  <img src="https://i.imgur.com/mZ6K90c.png" height="600" width="400"></img>
</p>

## Mobile

<p align="center"> 
   <img src="https://i.imgur.com/EgqYpPj.jpg" height="500 width="350"> </img>
   <img src="https://i.imgur.com/cModS6J.jpg" height="500 width="350"> </img>
   <img src="https://i.imgur.com/TN3km5E.jpg" height="500 width="350"> </img>
   <img src="https://i.imgur.com/qcffvv3.jpg" height="500 width="350"> </img>
</p>

## Instalação
Configure o MongoDB e atualize a string de conexão com seu `User:Senha` no arquivo `index.js`.  
Para instalar as dependências e executar o servidor, clone o projeto em seu computador e em seguida execute os comandos 
```bash
cd backend
yarn install
yarn dev
```
Para iniciar o **Frontend**, utilize os comandos:
```bash
cd web
yarn install
yarn start
```
Para testar o **Mobile**, primeiro coloque o endereço do seu computador no arquivo `src/services/api.js`, e depois execute os comandos:
```bash
yarn global add install expo-cli
cd mobile
yarn install
yarn start
```

 >*Author: [@MateusRangel0](https://github.com/MateusRangel0)*
