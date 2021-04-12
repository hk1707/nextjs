import styles from './post-body.module.css'

import {  MDBCardText } from 'mdb-react-ui-kit';

export default function PostBody({ content }) {
  return (
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
  )
}