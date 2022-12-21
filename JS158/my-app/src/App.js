import React,{ Component } from 'react';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';

import './App.css';

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
  a {
    display: block;
    margin: 10px 0 10px 0;
    color: ${props => props.active ? 'orange' : 'black'};
  }
  input {
    display: block;
    margin-top: 10px;
  }
`;

const Header = styled.h2`
  font-size: 22px;
`;

// Эту кнопку экспортируем
export const Button = styled.button`
  dispaly: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0,0,0, .2);
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;

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
      <EmpItem active>
        <Button onClick={this.nextYear}>{this.state.text}</Button>
        {/* анонимная стрелочная функция, чтобы не терять контекст */}
        {/*<button onClick={() => this.nextYear}>{this.state.text}</button>*/}
        <Header>My name is {name}, 
            surname - {surname}, 
            age - {years}, 
            position - {position}</Header>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
      </EmpItem>
    )
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

const DynamicGreating = (props) => {
  return (
    <div className={'mb-3 p-3 border border-' +props.color}>
      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
        })
      }
    </div>
  )
}

const HelloGreating = () => {
  return(
    <div style={{'width': '600px', 'margin': '0 auto'}}>
      <DynamicGreating color={'primary'}>
        <h2>Верх</h2>
      </DynamicGreating>
    </div>
  )
}

const Message = (props) => {
  return (
    <h2>The counter is {props.counter}</h2>
  )
}

class Counter extends Component {
  state = {
    counter: 0
  }

  changeCounter = () => {
    this.setState(({counter}) => ({
      counter: counter + 1
    }))
  }

  render() {
    return (
      <>
        <button
          className={'btn btn-primary'}
          onClick={this.changeCounter}>
          Click me
        </button>
        {this.props.render(this.state.counter)}
        {this.props.render(this.state.counter)}
      </>
    )
  }
}

function App() {
  // передаём свойства
  return (
    <Wrapper>

      <Counter render={counter => (
        <Message counter={counter}/>
      )}/>

      <HelloGreating/>
      <BootstrapTest
        left = {
          <DynamicGreating color={'primary'}>
            <h2>Слева 1</h2>
            <h2>Hello world!</h2>
          </DynamicGreating>
        }
        right = {
          <DynamicGreating color={'primary'}>
            <h2>Справа</h2>
          </DynamicGreating>
        }
      />

      <WhoAmI name='Johan' surname="Уарабэй" link="facebook.com"/>
      <WhoAmI name='Pohan' surname="Ежик" link="vk.com"/>

    </Wrapper>
  );
}

export default App;
