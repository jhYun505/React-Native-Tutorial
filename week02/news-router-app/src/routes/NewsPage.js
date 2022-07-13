import { Fragment, useState, useEffect } from 'react';
import { getNewsList } from '../libs/newsapi';

export default function NewsPage(props) {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
      async function fetchData(keyword) {
        // You can await here
        const response = await getNewsList(keyword);
        setNewsList(response);
        // ...
      }
      fetchData(props.keyword);
    }, [props.keyword]);

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