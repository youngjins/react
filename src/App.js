import {useState} from "react";
import './App.css';
import Header from './component/Header/Header';
import List from './component/List/List';

const filters = ['all', 'active', 'completed'];
function App() {
    const [filter, setFilter] = useState(filters[0]);
    return (
        <div>
            <Header
                filters={filters}
                filter={filter}
                onFilterChange={(filter) => setFilter(filter)}
            />
            <List filter={filter}/>
        </div>
    );
}

export default App;
