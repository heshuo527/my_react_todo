import React from "react";
// 手写useState
function useState(initialValue) {
    // 用于跟踪实际状态
    let currentIndex = 0;
    // 用于存储所有状态
    let stateArray = [];
    // 如果 stateArray 中没有当前组件实例的状态，则使用 initialValue 初始化
    if (stateArray[currentIndex] === undefined) {
        stateArray[currentIndex] = initialValue;
    }
    // 声明 setState 函数用于更新状态
    function setState(newState) {
        // 更新状态值
        stateArray[currentIndex] = newState;
        // 强制重新渲染组件
        forceUpdate();
        // 指向下一个组件实例
        currentIndex++;
        // 保存 currentIndex 的值，以便下次调用 useState 时使用
        if (typeof window !== 'undefined') {
            window.useStateIndex = currentIndex;
        }
    }
    const forceUpdate = () => {};
    // 返回状态值和 setState 函数
    return [stateArray[currentIndex], setState];
}

// 用于强制重新渲染组件的函数
function render() {
    // 这里可以是自己实现的强制重新渲染逻辑
    console.log('Component has been rerendered!');
}


export default useState;