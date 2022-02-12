import Layout from '../components/Layout'
import styles from "../styles/About.module.scss"
import Title from '../components/parts/Title'
import Link from "next/link";
import Image from 'next/image';


export default function About() {

  return (
   <Layout title='About'>
     
     <section className={styles.about_page}>
        <div className="wrapper">
            <Title ttl="Mission" sub="ミッション" />
            <h1>No Tech No Life</h1>
            <p className={styles.subttl}>
                技術の進化が早いウェブ業界で知識を常にアップデートし<br />
                フリーランスや個人事業主の夢を実現する力である<br />
                モダンなウェブテクノロジーを提供します。
            </p>

            <div className={styles.profile}>
                <Title ttl="Profile" sub="自己紹介" />
                <div className={styles.flex}>
                    <div className={styles.imgarea}>
                        <img src="/img/sample.jpg"/>
                    </div>

                    <div className={styles.textarea}>
                        <h2>しゅんでぃー</h2>
                        <p className={styles.desc}>
                            2021年に地元の高専を卒業。
                            同年4月東京都のウェブ系企業に入社し、大手アパレルブランドのECサイト内
                            のコーディング業務・管理運用業務を行っている。
                            モダンフロントエンドが大好きで、React、Nextの案件にどうしてもつきたく、隙
                            あらばアピールしている。
                            働きつつ平日でも３時間、休日８時間の週31時間は業務に充てられるため、
                            リソースはかなりある。
                        </p>
                        <div className={styles.sns}>
                            <Link href="">
                                <a className={styles.ln}>github</a>
                            </Link>

                            <Link href="">
                                <a className={styles.ln}>Twitter</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>

   </Layout>
  )
}