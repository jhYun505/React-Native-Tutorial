import axios from 'axios';

const apiKey = '8c750b62b770414f8c391319c3f35112';

export async function getNewsList(keyword) {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&sortBy=publishedAt&apiKey=${apiKey}`);
    return response.data.articles;
  }
  
  export async function getHeadlineList(keyword) {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&sortBy=publishedAt&apiKey=${apiKey}`);
      return response.data.articles;
  }