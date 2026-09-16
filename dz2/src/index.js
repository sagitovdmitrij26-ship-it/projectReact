import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import music from "./components/Section/music.json"
 
let mz = music.songs;
let nav = { 
  'Главная': '/',
  'Фотогаллерея': '/photo',
  'список песен': '/music',
  'Биография': '/biography'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App navigation={nav} mz = {mz} />
  </React.StrictMode>
);


