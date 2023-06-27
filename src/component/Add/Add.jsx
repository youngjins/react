import React, {useState} from "react";

export default function Add({onAdd}) {
    const [text, setText] = useState('');
    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length === 0){
            setText('');
            return;
        }
        let dt = new Date();

        onAdd({id:dt.getTime(), text, status: 'active'})
        setText('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='입력하세요'
                value={text}
                onChange={handleChange}
            />
            <button>add</button>
        </form>
    )
}

