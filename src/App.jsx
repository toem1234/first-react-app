// import React from 'react'
import './App.css';

const App = () => {
  const name = 'Sudjai Jannual';
  const salary = 24000;
  const wifeSalary = 2000;
  const random = Math.random();
  console.count('counter');
  return (
    <>
      <h1 className="App" style={{ color: 'brown', fontSize: 32 }}>
        App Component
      </h1>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
      <hr />

      <b>สวัสดีคุณ {name}</b>
      <p>รายได้รวมของครอบครัว {salary + wifeSalary} บาท </p>
      <hr />

      <b>ทดสอบ random ตัวเลข</b>
      <p>random ตัวเลข : {random}</p>
      <p>
        {random > 0.5 ? (
          <span style={{ color: 'green' }}>มากกว่าครึ่ง</span>
        ) : (
          <span style={{ color: 'red' }}>น้อยกว่าครึ่ง</span>
        )}
      </p>
    </>
  );
};

export default App;
