import useState from "../hooks/useState";

import React from 'react';

const Demo = () => {
    const [count, setCount] = useState(0);
    console.log('count', count);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>点我➕1</button>
            count: {count}
        </div>
    );
}

export default Demo;
