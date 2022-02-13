
import styles from './Mainvisual.module.scss'
import React from "react"

export default function Mainvisual() {

  return (
      <>
        <div className={styles.main}>
            <div className={styles.textarea}>
                <p>東京の現役コーダーによるWEB制作</p>
                <h1><span>No</span> Tech <span>No</span> Life</h1>
            </div>
            <div className={styles.imgarea}> 
               <img src='img/main1.jpg' />
            </div>
        </div>
      </>
    
  );
}


