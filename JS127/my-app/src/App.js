import './App.css';

// компонент для отображения
// function WhoAmI (props) {
function WhoAmI ({name, surname, link}) {   // деструктурирован
  return (
    <div>
      <h1>My name is {name()}, surname - {surname}</h1>
      <a href={link}>My profile</a>
    </div>
  )
}

function App() {
  // передаём свойства
  return (
    <div className="App">
      <WhoAmI name={() => {return 'Johan'}} surname="Уарабэй" link="facebook.com"/>
      <WhoAmI name={() => {return 'Pohan'}} surname="Ежик" link="vk.com"/>

    </div>
  );
}

export default App;
