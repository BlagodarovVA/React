import { Component, StrictMode } from 'react';
import './App.css';

const Header = () => {
  return <h2> Гогле</h2>
}

/*
const Field = () => {
  const holder = 'Искать тут...';
  const styledField = {
    width: '300px'
  };
  return <input 
          placeholder={holder} 
          type="text" 
          style={styledField}/>
}
*/

class Field extends Component {
  render() {
    const holder = 'Искать тут...';
    const styledField = {
      width: '300px'
    };

    return <input 
            placeholder={holder} 
            type="text" 
            style={styledField}/>
  }
}

function Btn() {
  const text = 'Log in';
  const logged = true;
  // если залогинен - Enter, если нет - text
  return <button>{logged ? 'Шарык, фас!' : text}</button>
}

function App() {
  return (
    <div className="App">
        <StrictMode>
          <Header/>
        </StrictMode>
      <Field/>
      <Btn/>

    </div>
  );
}

export {Header};
export default App;
