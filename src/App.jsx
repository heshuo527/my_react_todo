import React, { useState, useEffect } from "react";
import Demo from "./components/Demo";
import ajax from "./serive/ajax";
import './index.css'

function App() {

  const [todos, setTodos] = useState([]);
  const [changeValue, setChangeValue] = useState('');

  // 初始化本地数据
  useEffect(() => {
    (async () => {
      await init();
    })()
  }, [])

  // 监听todos存储到本地
  useEffect(() => {
  }, [todos])

  const init = async () => {
    try {
      const res = await ajax('http://localhost:3000/user/all', 'GET');
      setTodos(res)
    } catch (error) {
      console.log('初始化错误', error);
    }
  };

  /**
 * 监听输入的值
 * @param {*} e 
 */
  const handleInputValue = (e) => {
    const { value } = e.target;
    setChangeValue(value);
  }

  /**
   * 添加一个todo
   */
  const handleAddTodoList = async () => {
    const id = new Date().getTime();
    // 组装数据
    const todo = {
      name: changeValue, //名称
      id, // 唯一值
      done: false, // 完成
    };
    try {
      await ajax('http://localhost:3000/user/add', 'POST', todo);
    } catch (error) {
      console.log(error);
    } finally {
      await init();
    }
  }

  /**
   * 删除一个todo
   * @param {*} id
   */
  const handleDeleteTodo = async (id) => {
    try {
      await ajax('http://localhost:3000/user/delete', 'POST', { id });
    } catch (error) {
      console.log('error at line 67:', error)
    } finally {
      await init();
    }
  }

  /**
   * 完成一个todo
   * @param {*} id
   */
  const handelDoneTodo = async (id) => {
    try {
      await ajax('http://localhost:3000/user/update', 'POST', { id });
    } catch (error) {
      console.log('error at line 67:', error)
    } finally {
      await init();
    }
  }

  return (
    <div>
      <input placeholder="请输入" onChange={handleInputValue} />
      <button onClick={handleAddTodoList}>添加</button>
      {todos.map((item) => {
        const { name, id, done } = item;
        return (
          <div key={id}>
            <button style={{ marginRight: '10px' }} onClick={() => handleDeleteTodo(id)}>删除</button>
            <button style={{ marginRight: '10px' }} onClick={() => handelDoneTodo(id)}>{done ? '已完成' : '取消完成'}</button>
            <span className={done ? 'item_done' : ''}>{name}</span>
          </div>
        )
      })}
    </div>
  );
}

export default App;
