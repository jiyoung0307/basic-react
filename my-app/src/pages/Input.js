import React, { useState } from 'react';

const Input = () => {
    const [txtValue, setTextValue] = useState("");

    const onChanged = (e) => {
        setTextValue(e.target.value)
    };

    return (
        <div>
            <input type="text" value={txtValue} onChange={onChanged} />
            <br />
            <p>{txtValue}</p>
        </div>
    );
}

export default Input;