import "./app-info.css";

// с большой буквы, чтобы бабель воспринял как элемент, а не компонент
const AppInfo = () => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в отделе ДИТ</h1>
            <h2>Общее число сотрудников </h2>
            <h2>Премию получат: </h2>
        </div>
    )
}

export default AppInfo;