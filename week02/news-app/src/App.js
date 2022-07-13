import { useEffect, useState, useCallback } from "react";
import './App.css';
import axios from 'axios';

const apiKey = '8c750b62b770414f8c391319c3f35112'

async function getNewsList(keyword) {
  const response = await axios.get('https://newapi.org/vw/everything?q=${keyword}&sortBy=publicshedAt&apiKey=${apiKey}');
  return response.data.articles;
}


function App() {

  /* 두개의 차이는 무엇인가 ? 배열을 사용하는 경우와 string으로 받는 경우 */
  const [newsList, setNewsList] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    async function fetchData(keyword) {
      const response = await getNewsList(keyword);
      console.log(response);
      setNewsList(response);
    }

    fetchData(keyword);
  }, [keyword]);

  
  // 문자열 바꿔주는 함수
  const onChangeText = useCallback((e) => {
    setKeyword(e.target.value)
  }, []);

  const onClickBtn = useCallback(async (e) => {
    const response = await getNewsList(keyword);
    setNewsList(response);
  },[keyword]);

  return (
    <div className="App">
      <input type="text" value={keyword} placeholder='검색어를 입력하세요' onChange={onChangeText}/>
      <button onClick={onClickBtn}>뉴스가져와</button>
      <ul ud = "containerName">
        {newsList.map((row, idx) => {
          return (
            <li key={idx}>{row.title}</li>
          );
        })}
      </ul>
    </div>
  );

}

export default App;