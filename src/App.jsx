import React, { useState, useEffect } from "react";
import Demo from "./components/Demo";
import './index.css'

function App() {

  const [todos, setTodos] = useState(JSON?.parse(localStorage?.getItem("todoList")) || []);
  const [changeValue, setChangeValue] = useState('');

  // 初始化本地数据
  useEffect(() => {
    readTodos();
  }, [])

  // 监听todos存储到本地
  useEffect(() => {
    saveTodos();
  }, [todos])

  /**
   * 添加一个todo
   */
  const handleAddTodoList = () => {
    const id = new Date().getTime();
    // 组装数据
    const todo = {
      name: changeValue, //名称
      id, // 唯一值
      done: false, // 完成
    };
    setTodos([...todos, todo]);
  }

  /**
   * 监听输入的值
   * @param {*} e 
   */
  const handleInputValue = (e) => {
    const { value } = e.target;
    setChangeValue(value);
  }

  /**
   * 删除一个todo
   * @param {*} id
   */
  const handleDeleteTodo = (id) => {
    const todoFilter = todos.filter(item => item.id !== id);
    setTodos([...todoFilter]);
  }

  /**
   * 完成一个todo
   * @param {*} id
   */
  const handelDoneTodo = (id) => {
    const todoDone = todos.map(item => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    })
    setTodos([...todoDone]);
  }

  /**
   * 存储本地
   * @param {*} todo 
   */
  function saveTodos() {
    // 序列化todo  存储本地
    const todoStr = JSON.stringify(todos);
    localStorage.setItem("todoList", todoStr);
  }

  /**
   * 读取本地数据
   * @param {*} todo 
   */
  function readTodos() {
    let todoParse = JSON.parse(localStorage.getItem("todoList"));
    if (!todoParse) {
      todoParse = [];
    }
    setTodos([...todoParse]);
  }

  return (
    <div>
      <Demo />
      <input placeholder="请输入" onChange={handleInputValue} />
      <button onClick={handleAddTodoList}>添加</button>
      {todos.map((item) => {
        const { name, id, done } = item;
        return (
          <div key={id}>
            <button style={{ marginRight: '10px' }} onClick={() => handleDeleteTodo(id)}>删除</button>
            <button style={{ marginRight: '10px' }} onClick={() => handelDoneTodo(id)}>完成</button>
            <span className={done ? 'item_done' : ''}>{name}</span>
          </div>
        )
      })}
    </div>
  );
}

export default App;
