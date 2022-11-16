import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

const data = [
  {name: 'Хуан Матус', salary: 2300, increase: true},
  {name: 'Фёдор Сумкин', salary: 800, increase: false},
  {name: 'Иван Дулин', salary: 1200, increase: false},
  {name: 'Karlos Kastaneda', salary: 1001, increase: true}
];

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
