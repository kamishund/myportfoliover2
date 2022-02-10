
import Link from "next/link";
import styles from './Button.module.scss'


export default function Button({ link = "/" ,children}) {
  return (
    <>
     <Link href={link}>
        <a className={styles.pbtn}>{children}</a>
    </Link>
    </>
  );
}