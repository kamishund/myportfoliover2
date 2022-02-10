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
                <a>ShunD Tech</a>
            </Link>
        </h1>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>About</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/">
                            <a>Works</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/">
                            <a>Service</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/">
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
            <li>
                <Link href="/">
                    <a>About</a>
                </Link>
            </li>

            <li>
                <Link href="/">
                    <a>Works</a>
                </Link>
            </li>

            <li>
                <Link href="/">
                    <a>Service</a>
                </Link>
            </li>

            <li>
                <Link href="/">
                    <a>Contact</a>
                </Link>
            </li>
        </ul>
      </div>
    </>
  );
}