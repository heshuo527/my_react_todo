import React from "react";
import { Button, Form } from 'antd';
import useState from "../../hooks/useState";

const Login = () => {
  const [number, setNumber] = useState(0);
  return <>
    <h2>{number}</h2>
    <Button onClick={() => setNumber(number + 1)}>点我加一</Button>
  </>
};

export default Login;
