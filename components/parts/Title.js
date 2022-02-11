import Link from "next/link";
import styles from './Title.module.scss'


export default function Title({ttl,sub}) {
  return (
    <h2 className={styles.title}>{ttl}<span>{sub}</span></h2>
  );
}