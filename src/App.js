import { useState } from "react";

function App() {
  const [list, setList] = useState([
    { id: 1, value: "밥먹기" },
    { id: 2, value: "코딩하기" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const addToList = () => {
    // 이전 값 앞에 새로운 값 추가
    setList((prevList) => {
      return [
        {
          id: list.length + 1,
          value: inputValue,
        },
        ...prevList,
      ];
    });
    setInputValue("");
  };

  return (
    <>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addToList}>추가</button>
      <ul>
        {list.map((item) => {
          // 중복된 키로 인한 얘기치 못한 버그 발생
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
