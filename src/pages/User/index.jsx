import React, { useState } from 'react';

const Index = () => {
  const [dataSource, setDataSource] = useState([
    { name: '章三', id: 1 },
    { name: '李四', id: 2 },
    { name: '王五', id: 3 },
    { name: '找刘', id: 4 },
  ]);

  const handleFindName = (clickedId) => {
    // 将点击的元素移到数组的最前面，保持其他元素的相对顺序
    const clickedIndex = dataSource.findIndex(item => item.id === clickedId);
    const updatedDataSource = [
      dataSource[clickedIndex],
      ...dataSource.slice(0, clickedIndex),
      ...dataSource.slice(0, clickedIndex).reverse(),
      ...dataSource.slice(clickedIndex + 1),
    ];

    setDataSource(updatedDataSource);
  };

  return (
    <div>
      <div>
        {dataSource.map(item => (
          <span
            key={item.id}
            style={{ marginRight: 20, color: 'red', cursor: 'pointer' }}
            onClick={() => handleFindName(item.id)}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Index;
