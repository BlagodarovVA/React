import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          data: [
        {name: 'Huan Matus', salary: 2300, increase: true, id: 1},
        {name: 'Don Henaro', salary: 800, increase: false, id: 2},
        {name: 'Karlos Kastaneda', salary: 1001, increase: false, id: 3}
      ]
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      // const index = data.findIndex(elem => elem.id === id);
      // копируем с 0 массива до индекса
      // const before = data.slice(0, index);
      // копируем с индекса до конца
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];

        
        return {
          // останутся те элементы, у которых id не совпал с переданным
          data: data.filter(item => item.id !== id)
      }
  })
}


  addItem = (name, salary) => {
    const newItem = {
        name, 
        salary,
        increase: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
  }

  render() {
    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            
            <EmployeesList 
                data={this.state.data}
                onDelete={this.deleteItem}/>
            <EmployeesAddForm onAdd={this.addItem}/>
        </div>
    );
  }
}

export default App;
