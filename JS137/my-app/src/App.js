import { Component } from 'react';

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
      text: '+++--',
      position: ''
    }
    // жестко привязываем метод к экземпляру класа, чтобы не терялся this
    //this.nextYear = this.nextYear.bind(this);
  }

  // без стрелочнй функции после срабатывания события теряется контекст
  nextYear = () => {
  //nextYear() {
    // правильное изменение состояния через setState. работает асинхронно
    // колбэк позволяет дождаться выполнения предыдущего состояния
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const {name, surname, link} = this.props;
    const {position, years} = this.state;

    return (
      // Пустой тег говорит о том, что это фрагмент
      <>
        <button onClick={this.nextYear}>{this.state.text}</button>
        {/* анонимная стрелочная функция, чтобы не терять контекст */}
        {/*<button onClick={() => this.nextYear}>{this.state.text}</button>*/}
        <h2>My name is {name}, 
            surname - {surname}, 
            age - {years}, 
            position - {position}</h2>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
      </>
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
