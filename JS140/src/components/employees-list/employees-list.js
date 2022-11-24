import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';


const EmployeesList = ({data, onDelete, onToggleProp}) => {
    const elements = data.map(item => {
        // частичная деструктуризация. вынимаем id, а остальные элементы объединяем в itemProps
        const {id, ...itemProps} = item;
        //console.log(itemProps);
        
        return (
            //<EmployeesListItem name={item.name} salary={item.salary}/>
            <EmployeesListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}


export default EmployeesList;