import React, { useState } from 'react';
import { Button } from 'antd';

const CountDown = () => {
  const [data, setData] = useState({
    code: "",
    mobile: "",
    countDown: 0,
  });

  const handleGetCode = () => {
    setData((pre) => {
      const toggle = { ...pre };
      toggle.countDown = 10;
      return toggle;
    });
    const startTime = new Date();
    const h = setInterval(() => {
      const currentTime = new Date();
      const diffSecond = Math.floor((currentTime - startTime) / 1000);
      setData((pre) => {
        const toggle = { ...pre };
        toggle.countDown = 10 - diffSecond;
        if (toggle.countDown === 0) {
          clearInterval(h);
        }
        return toggle;
      });
    }, 500);
  };


  return (
    <div>
      <Button
        type="primary"
        disabled={data.countDown}
        onClick={handleGetCode}>
        {data.countDown ? `${data.countDown}秒倒计时` : "获取验证码"}
      </Button>
    </div>
  );
}

export default CountDown;
