import React, { useState } from 'react';

const Counter = () => {
    // const num = 0과 같은 의미
    const [num, setNumber] = useState(0);

    const increase = () => {
        setNumber(num + 1);
    }

    const decrease = () => {
        setNumber(num - 1);
    }

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
            <h3>React에서는 동적으로 변경되는 값을 State를 쓰고,<br />이 State를 관리하기 위해 쓸 수 있는 함수가 useState가 있음</h3>
        </div>
    );
}

export default Counter;