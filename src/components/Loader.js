import { Spinner } from "react-bootstrap";
import styles from "../styles/FilterProps.module.css"

import React from 'react'

const Loader = () => {
  return (
   

<div className={styles.LoaderContainer}>
  <Spinner animation="border" variant="secondary" />

</div>
  )
}

export default Loader