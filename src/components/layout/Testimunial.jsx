import React from 'react'
import styles from './Testimunial.module.css'

const Testimunial = ({imageScr, title,quote}) => {
  return (
    <div className={styles.container}>
      <img src={imageScr} alt={title} className={styles.img}/>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.quote}>{quote}</p>
    </div>
  )
}

export default Testimunial
