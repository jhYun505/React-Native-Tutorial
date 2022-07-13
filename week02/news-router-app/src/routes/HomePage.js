import { Fragment } from 'react';
import NewsPage from './NewsPage';

export default function HomePage() {
    return (
      <Fragment>
        <NewsPage keyword={"정치"} title={"정치"} />
        <NewsPage keyword={"사회"} title={"사회"} />
        <NewsPage keyword={"경제"} title={"경제"} />
        <NewsPage keyword={"IT"} title={"IT"} />
        <NewsPage keyword={"금융"} title={"금융"} />
        <NewsPage keyword={"정치"} title={"정치"} />
        <NewsPage keyword={"생활문화"} title={"생활문화"} />
        <NewsPage keyword={"여행"} title={"여행"} />
      </Fragment>
    );
  }