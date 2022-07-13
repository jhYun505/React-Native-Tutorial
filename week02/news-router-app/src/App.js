import { useCallback, useState } from "react";
import "./newsstyle.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import TopMenu from "./components/TopMenu";
import HomePage from './routes/HomePage';
import NewsPage from "./routes/NewsPage";
import NewsSearchPage from './routes/NewsSearchPage';

function App() {

  const [keyword, setKeyword] = useState('');

  const onChangeKeyword = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);


  const onClickBtn = useCallback(() => {
    document.location.href = `/news/search/${keyword}`;
  }, [keyword]);


  return (
    <BrowserRouter>
      <header>
        <h1>Daily News</h1>
      </header>
      <nav>
        <TopMenu />
        {/* A Search form is another commmon non-linear way to navigate through a website. */}
        <form>
          <input type="search" name="q" placeholder="기사 검색" id="keyword" onChange={onChangeKeyword}/>
          <input type="button" defaultValue="검색" onClick={onClickBtn}/>
        </form>
      </nav>
      {/* Here is our page's main content */}
      <main>{/* It contains an article */}
        {/* <NewsPage keyword={"테슬라"}/> */}
        <article>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/news/a" element={<NewsPage keyword={"정치"} title={"정치"} />} />
            <Route path="/news/b" element={<NewsPage keyword={"사회"} title={"사회"} />} />
            <Route path="/news/c" element={<NewsPage keyword={"경제"} title={"경제"} />} />
            <Route path="/news/d" element={<NewsPage keyword={"IT"} title={"IT"} />} />
            <Route path="/news/e" element={<NewsPage keyword={"금융"} title={"금융"} />} />
            <Route path="/news/g" element={<NewsPage keyword={"생활문화"} title={"생활문화"} />} />
            <Route path="/news/h" element={<NewsPage keyword={"여행"} title={"여행"} />} />
            <Route path="/news/search/:keyword" element={<NewsSearchPage title={"검색어"} />} />
          </Routes>
        </article>
      </main>
      {/* And here is our main footer that is used across all the pages of our website */}
      <footer>
        <p>©Copyright 2050 by nobody. All rights reversed.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;