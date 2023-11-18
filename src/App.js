import { useState } from "react";

function App() {
  const [list, setList] = useState(["밥먹기", "코딩하기"]);
  const [inputValue, setInputValue] = useState("");

  const addToList = () => {
    // 이전 값 앞에 새로운 값 추가
    setList((prevList) => {
      // 새로운 항목이 추가될때마다,
      // 항목 렌더링 시, 기존 항목의 key 값이 +1이 되기 때문에
      // 모든 항목을 다시 그린다.
      return [inputValue, ...prevList];
    });
    setInputValue("");
  };

  return (
    <>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addToList}>추가</button>
      <ul>
        {list.map((item, index) => {
          return (
            <div key={index}>
              <li>{item}</li>
              <input />
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default App;
