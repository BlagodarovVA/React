import {Component} from 'react';

import './App.css';

// компонент для отображения
// function WhoAmI (props) {
class WhoAmI extends Component {
  // чтобы передать пропсы в экземпляры классов нужен конструктор
  constructor(props) {
    super(props);
    // создаем состояние
    this.state = {
      years: 27,
      text: '+++--'
    }
  }

nextYear = () => {
  // правильное изменение состояния через setState. работает асинхронно
  // колбэк позволяет дождаться выполнения предыдущего состояния
  this.setState(state => ({
    years: state.years + 1
  }))
}

  render() {
    const {name, surname, link} = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h2>My name is {name}, surname - {surname}, age - {this.state.years}</h2>
        <a href={link}>My profile</a>
      </div>
    )
  }
}

function App() {
  // передаём свойства
  return (
    <div className="App">
      <WhoAmI name='Johan' surname="Уарабэй" link="facebook.com"/>
      <WhoAmI name='Pohan' surname="Ежик" link="vk.com"/>

    </div>
  );
}

export default App;
