
import Link from "next/link";
import styles from './Card.module.scss'


export default function Card({id,ttl,date,imgurl}) {
  return (
    <>
     <Link href={`/works/${id}`}>
        <a className={styles.card}>
            <div className={styles.bg}>
               <img src={imgurl}/>
            </div>
          
           <h3>{ttl}</h3>
           <p className={styles.date}>{date}</p>
        </a>
    </Link>
    </>
  );
}