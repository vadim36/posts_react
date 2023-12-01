import React, {useReducer} from "react"
import styles from './Post.module.scss';

import Button from "../../UI/Button/Button";

export default function Post({postData}) {
  return (
    <div className={styles.post}>
      <h3 className={styles.title}>
        <strong>{postData.id}</strong>. {postData.title}
      </h3>
      <p>{postData.body}</p>
      <ul className={styles.panelControls}>
        <li>
          <Button type="accent">like</Button>
        </li>
        <li>
          <Button type="danger">dislike</Button>
        </li>
        <li>
          <Button type="success">show comments</Button>
        </li>
      </ul>
    </div>
  )
}