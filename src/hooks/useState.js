import React from "react";
import ReactDOM from 'react-dom';
import Login from "../pages/Login";
// 手写useState
function useState(initState) {
    let lastStates = [];
    let index = 0;
    lastStates[index] = lastStates[index] || initState;
    const currentIndex = index;
    function setState(newState) {
        lastStates[currentIndex] = newState
        render()
    }
    return [lastStates[index++], setState];
}

function render() {
    ReactDOM.render(
        <Login />,
        document.getElementById('root')
    )
}

export default useState;
