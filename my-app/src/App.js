import {useEffect, useState} from 'react';
import './App.css';

function MyFirstComponent(props) {
  useEffect(() => {
    console.log('mounted');

    return () => {
      console.log('unmounted');
    }
  }, []); //끝에 빈 배열을 인자로 넣어주어야
  
  return (
    <span>{props.title}</span>
  )
}
function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => {
        setIsVisible(!isVisible);
      }}>토글</button> 
      {isVisible && <MyFirstComponent title = "Hello world2"/>}
    </div>
  );
}

export default App;
