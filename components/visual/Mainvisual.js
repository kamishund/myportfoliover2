
import styles from './Mainvisual.module.scss'
import React from "react"

export default function Mainvisual() {

  return (
      <>
        <div className={styles.main}>
           <h1>
             <span>Freelance</span>
             <span>Web Developer</span>
             <span>Front-end Engineer</span>
           </h1>

           <a href="mailto:kamishund@gmail.com" className={styles.contactbtn}>CONTACT</a>
        </div>
      </>
    
  );
}


