import { useState, useEffect } from "react";
import styles from './styles/App.module.scss';

import Post from "./components/Post/Post";

function App() {
  const [postsList, setPostsList] = useState([]);

  async function setPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((responsive) => responsive.json())
      .then((responsive) => setPostsList(responsive))
  }

  useEffect(() => {
    setPosts();
  }, []);

  return (
    <div id="App">
      <h1 className={styles.mainTitle}>Посты:</h1>
      <article aria-description="Posts section">
        <ul className={styles.postsList}>
          {
            postsList.map((postData) => {
              return <li key={postData.id}>
                <Post postData={postData}/>
              </li>
            })
          }
        </ul>
      </article>
    </div>
  );
}

export default App;