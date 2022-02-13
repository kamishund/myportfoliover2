import Layout from '../components/Layout'
import styles from "../styles/Service.module.scss"
import Title from '../components/parts/Title'
import Link from "next/link";


export default function About() {

  return (
   <Layout title='Service'>
     
     <section className={styles.service_page}>
        <div className="wrapper">
            <Title ttl="Service" sub="サービス一覧" />
            <div className={styles.flex}>
                <div className={styles.imgarea}><img src='img/main1.jpg' /></div>
                <div className={styles.textarea}>
                    <p className={styles.num}>01-</p>
                    <h2 className={styles.name}>ホームページ制作</h2>
                    <p className={styles.desc}>
                       Wordpressで構築するプラン、STUIOで構築するプラン、HeadressCMSで構築するプランがありあます。 
                    </p>

                    <dl>
                        <dt>①Wordpressプラン</dt>
                        <dd>
                             Wordpressで制作したサイトは100%自由にデザインすることができ、更新や運用もお客様自身で簡単にすることができます。事前にヒアリングをさせていただき、世界に１つだけのオリジナルウェブサイトを制作します。
                        </dd>

                        <dt>②STUDIOプラン</dt>
                        <dd>
                            Studioで制作したサイトはコーディングを必要としないため、その分安価に導入することができます。管理画面のUIもわかりやすく、初めてサイトを構築する方でも安心して使うことができます。とりあえずウェブサイトが欲しい方におススメ
                        </dd>

                        <dt>③HeadlessCMSプラン</dt>
                        <dd>
                             バックエンドとフロントエンドを分けたホームページを制作します。お客様が操作する画面はWordpressなどのおなじみのCMSでフロントエンドはいま最も多く使用されているJavascriptフレームワークNext.jsを使用しています。SEOにも強く非常に高速なためパフォーマンスの高いサイトに仕上がります。<br />
                             {/* <Link href="/"><a>詳しくはこちら</a></Link>                 */}
                        </dd>
                    </dl>

                </div>
            </div>

            <div className={styles.flex}>
                <div className={styles.imgarea}><img src='img/main1.jpg' /></div>
                <div className={styles.textarea}>
                    <p className={styles.num}>02-</p>
                    <h2 className={styles.name}>ウェブアプリ開発</h2>
                    <p className={styles.desc}>
                        ノーコードツールBubbleでのの開発を行います。予約システム・タスク管理・SNSなどお客様の業務を快適にするウェブアプリケーションを作成します。
                    </p>

                    <dl>
                        <dt>Bubbleでの開発</dt>
                        <dd>
                             ノーコードツールであるBubbleでのウェブアプリ開発です。ノーコードとはいえ豊富なプラグインや一部コードを書くこともできるので、比較的柔軟に機能要件を満たすことができます。
                             <Link href="https://bubble.io/"><a>Bubble</a></Link>                
                        </dd>
                    </dl>

                </div>
            </div>

            <div className={styles.flex}>
                <div className={styles.imgarea}><img src='img/main1.jpg' /></div>
                <div className={styles.textarea}>
                    <p className={styles.num}>03-</p>
                    <h2 className={styles.name}>ECサイト構築</h2>
                    <p className={styles.desc}>
                        shopifyを用いたECサイト構築を行います。ECサイトは作成する前後もとても大切なので、実務での経験をもとにSNSなどの運用やサイト運用をサポートさせていただき、作って終わりではなく売れるECサイト制作をします。<br />
                        <Link href="https://www.shopify.jp/"><a>shopify</a></Link>   
                    </p>
                </div>
            </div>

            <div className={styles.flex}>
                <div className={styles.imgarea}><img src='img/main1.jpg' /></div>
                <div className={styles.textarea}>
                    <p className={styles.num}>04-</p>
                    <h2 className={styles.name}>LP制作・コーディング業務などのウェブ制作業務全般対応します</h2>
                    <p className={styles.desc}>
                        スキル：HTML/CSS/Javascript/jQuery/Wordpress/React/Next<br />
                        ウェブ制作会社にて現役で業務を行っていますので、基本的な技術や足りないリソースの補完などできます。安心してお任せください！
                    </p>
                </div>
            </div>
        </div>
     </section>

   </Layout>
  )
}