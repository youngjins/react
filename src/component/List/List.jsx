import React, {useState} from 'react';
import Add from "../Add/Add";

export default function List() {
    const [list, setList] = useState([
    ])
    const handleAdd = function(param){
        console.log(param)
        setList([...list, param])
    }
    return (
        <section>
            <ul>
                {
                    list.map((item) => (
                        <li key={item.id}>{item.text}</li>
                    ))
                }
            </ul>
            <Add onAdd={handleAdd}/>
        </section>
    )
}