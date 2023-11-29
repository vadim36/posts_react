import { useEffect, useState } from "react";
import axios from "axios";

import Post from "./components/Post/Post";

function App() {
  const [postsList, setPostsList] = useState([
    {id: 1, title: 'ЕВА01', body: 'lorem70'},
    {id: 2, title: 'ЕВА02', body: 'lorem70'},
    {id: 3, title: 'ЕВА03', body: 'lorem70'},
    {id: 4, title: 'ЕВА04', body: 'lorem70'}
  ]);

  return (
    <div id="App">
      <h1>Посты:</h1>
        {
          postsList.map((postData) => {
            return <Post postData={postData} key={postData.id}/>
          })
        }
    </div>
  );
}

export default App;