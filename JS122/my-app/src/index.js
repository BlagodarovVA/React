import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';


// (назв элем, назв класса css, содержимое тега)
//const elem = React.createElement('h2', {className: 'greetings'}, 'HelloHello!!!');

const text = 'Hello World';

const elem = (
  <div>
    <h2 className="text">Текст: {text}</h2>    
    <input type="text" /> <br/>
    <button tabIndex="0">Тык</button> <br/>
    <label htmlFor="label">Label</label>
    <button/>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);

