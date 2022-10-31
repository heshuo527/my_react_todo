import React, { useState, useEffect } from "react";
import './index.css'

function App() {

  // 初始化input框输入的值， 并拿到输入的值
  const [inpValue, setInpValue] = useState('')

  // 初始化一个数组, 把增加的todoList添加进来
  const [todoList, setTodoList] = useState([])

  //增加一个todo
  const addTodo = () => {
    const todo = {
      key: new Date().getTime(),
      content: inpValue,
      done: false
    }
    setTodoList([...todoList, todo])
    saveTodoList([...todoList, todo])
  }

  // 删除一个todo
  const deleteTodo = (key) => {
    const todos = [...todoList]
    const newTodoList = todos.filter(todo => todo.key !== key)
    setTodoList([...newTodoList])
    saveTodoList([...newTodoList])
  }

  // 更新一个todo
  const updateTodo = (key) => {
    const todos = [...todoList]
    todos.forEach(todo => {
      if (todo.key === key) {
        if (todo.done === false) {
          todo.done = true
        } else {
          todo.done = false
        }
      }
    })
    setTodoList([...todos])
    saveTodoList([...todos])
  }

  // 实现本地存储, 序列化数组
  const saveTodoList = (arrTodo) => {
    localStorage.todoList = JSON.stringify(arrTodo)
  }

  // 反序列化本地todoList, 解析到页面
  const loadTodoList = () => {
    let todos = localStorage.todoList
    if (!todos) {
      todos = '[]'
    }
    setTodoList(JSON.parse(todos))
  }

  useEffect(() => {
    loadTodoList()
    console.log('1111');
  }, [])

  const newTime = (time) => {
    const d = new Date(time)
    const dataS = d.getDate()
    const monthS = d.getMonth() + 1
    const hoursS = d.getHours()
    const minuteS = d.getMinutes()
    const secondS = d.getSeconds()
    const yarn = d.getFullYear();
    const month = dataS < 10 ? '0' + dataS : dataS;
    const data = monthS < 10 ? '0' + monthS : monthS;
    const hours = hoursS < 10 ? '0' + hoursS : hoursS;
    const minute = minuteS < 10 ? '0' + minuteS : minuteS;
    const second = secondS < 10 ? '0' + secondS : secondS;
    return yarn + '-' + month + '-' + data + ' ' + hours + ':' + minute + ':' + second
  }

  return (
    <div>
      <input placeholder="请输入内容" onChange={e => setInpValue(e.target.value)} />
      <button onClick={() => addTodo()}>添加</button>
      {
        todoList.map(todo => {
          return (
            <div key={todo.key}>
              <button onClick={() => updateTodo(todo.key)}>完成</button>
              <button onClick={() => deleteTodo(todo.key)}>删除</button>
              <span className="todo-time">{newTime(todo.key)}</span>
              <span className={todo.done ? "todo-done" : "done"}>{todo.content}</span>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
