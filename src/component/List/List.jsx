import React, {useState} from 'react';
import Add from "../Add/Add";
import Item from "../Item/Item";

export default function List({filter}) {
    const [list, setList] = useState([
    ])
    const handleAdd = function(param){
        setList([...list, param])
    }
    const handleUpdate = function(param){
        setList(list.map((t) => t.id === param.id ? param : t));
    }
    const handleDelete = function(param){
        console.log(param)
        setList(list.filter((t) => t.id !== param.id));
    }
    const filtered = getFilteredItems(list, filter);
    return (
        <section>
            <ul>
                {
                    filtered.map((item) => (
                        <Item
                            key={item.id}
                            item={item}
                            onUpdate={handleUpdate}
                            onDelete={handleDelete}
                        />
                    ))
                }
            </ul>
            <Add onAdd={handleAdd}/>
        </section>
    )
}

function getFilteredItems(list, filter){
    if(filter === 'all'){
        return list;
    }
    return list.filter(item => item.status === filter);
}