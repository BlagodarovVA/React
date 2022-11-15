import "./app-filter.css";

const AppFilter = () => {
    return (
        // большинство классов встроены в bootstrap
        <div className="btn-group">
            <button type="button"
                    className="btn btn-light">
                    Все сотрудники
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    На повышение
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    З/П более 1500$
            </button>
        </div>
    )
}

export default AppFilter;