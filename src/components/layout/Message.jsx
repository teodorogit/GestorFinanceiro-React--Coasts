import React from 'react'
import styles from './Message.module.css'
import {useState, useEffect} from 'react'

const Message = ({type, msg}) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
          setVisible(!msg);
        if(msg)
        setVisible(true)
        const timer = setInterval(() => {
          setVisible(false)
        }, 3000)
        
        return () => clearInterval(timer)
      },[msg])
  return (
  <>
    {visible && (
      <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
    )}
  </>
  )
  
}

export default Message
