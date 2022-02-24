import Link from "next/link";
import styles from './Header.module.scss'
import React, {useState} from "react"


export default function Headerbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuFunction = () => {
        setOpenMenu(!openMenu);
    }
  return (
    <>
    <header className={styles.header}>
        <h1>
            <Link href="/">
                <a>ShunD</a>
            </Link>
        </h1>
        <div className={`${styles.colc} ${openMenu ? styles.open : undefined}`}>
            <nav>
                <ul>
                    <li>
                        <Link href="/works">
                            <a>Works</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/price">
                            <a>Price</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="mailto:kamishund@gmail.com">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className={styles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
          </div>
        </div>
    </header>
    <div className={`${styles.drawerMenu} ${openMenu ? styles.open : undefined}`}>
        <ul>
            <li onClick={() => setOpenMenu(false)}>
                <Link href="/works">
                    <a>Works<br /><span>実績</span></a>
                </Link>
            </li>

            <li onClick={() => setOpenMenu(false)}>
                <Link href="/price">
                    <a>Price<br /><span>料金表</span></a>
                </Link>
            </li>

            <li onClick={() => setOpenMenu(false)}>
                <Link href="mailto:kamishund@gmail.com">
                    <a>Contact<br /><span>お問い合わせ</span></a>
                </Link>
            </li>
        </ul>
      </div>
    </>
  );
}