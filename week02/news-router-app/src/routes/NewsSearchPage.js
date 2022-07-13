import { Fragment, useState, useEffect } from 'react';
import { getNewsList } from '../libs/newsapi';
import {
  useParams
} from "react-router-dom";

export default function NewsPage(props) {
  const [newsList, setNewsList] = useState([]);
  const { keyword } = useParams();

  useEffect(() => {
    console.log(keyword);
    async function fetchData(searchKeyword) {
      // You can await here
      const response = await getNewsList(searchKeyword);
      setNewsList(response);
      // ...
    }
    fetchData(keyword);
  }, [keyword]);

  return (
    <Fragment>
      <h2>{props.title}</h2>
      <ul>{newsList.map((row, idx) => {
        return (
          <li key={idx}>{row.title}</li>
        );
      })}
      </ul>
    </Fragment>
  );
}