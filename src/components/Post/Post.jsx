import React from "react"
import styles from './Post.module.scss';

export default function Post({postData}) {
  return (
    <div className={styles.post}>
      <h3>{postData.id} {postData.title}</h3>
      <p>{postData.body}</p>
      <div className="panel-controls">
        <button>like</button>
        <button>dislike</button>
        <button>show comments</button>
      </div>
    </div>
  )
}