
import Link from "next/link";
import styles from './ContactButton.module.scss'


export default function ContactButton({ link = "/contact/" ,children}) {
  return (
    <>
     <Link href={link}>
        <a className={styles.pbtn}>{children}</a>
    </Link>
    </>
  );
}