import React, {useCallback, useEffect, useState} from 'react';
import Add from "../Add/Add";
import Item from "../Item/Item";
import {load} from "../../fetchers/fetcher";

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



    const procLoad = useCallback(async ()=> {

        const res = await load("/selectList", {'abc':'1234'});
        if (res) {
            console.log(res)
        }

    }, []);

    useEffect(() => {
        debugger;
        procLoad();

    }, []);

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