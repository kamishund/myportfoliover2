import Layout from '../components/Layout'
import MainNews from '../components/main/MainNews'
import Button from '../components/parts/Button'
import Mainvisual from '../components/visual/Mainvisual'
import styles from "../styles/Home.module.scss"
import Title from '../components/parts/Title'
import Card from '../components/parts/Card'
import Link from "next/link";
import { client } from '../lib/works'


export default function Home({works}) {


  if (!works) {
    return <div>Loading...</div>
  }

  return (
   <Layout title='ShunD TECH'>
     <Mainvisual />
     <MainNews />
     
     <section className={styles.work_section}>
       <div className='wrapper'>
          <div className={styles.work_ttl}>
              <Title ttl="Works" sub="実績"/>
          </div>

          <div className={styles.flex}>
              {
                works.map((post)=>(
                  <>
                  <Card 
                    key={post.id} 
                    id={post.id} 
                    ttl={post.title} 
                    date={post.createdAt} 
                    imgurl={post.image.url} 
                    />
                  </>
                ))
              }
          </div>

          <div className={styles.spa}>
            <Link href="/works">
                <a className={styles.pbtn}>More</a>
            </Link>
          </div>
       </div>
     </section>

     <section className={styles.voice_section}>
       <div className='wrapper'>
          <Title ttl="Voice" sub="お客様の声"/>  
          <p className={styles.voice_desc}>クラウドワークスでの評価を掲載しています。</p>
          <div className={styles.voice_wrap}>
              <div className={styles.voice_wrap_item}>
                <img src="img/voice.jpg" alt="お客様の声"/>
              </div>
              <div className={styles.voice_wrap_item}>
                <img src="img/voice2.jpg" alt="お客様の声"/>
              </div>
          </div>
       </div>
     </section>


     <section className={styles.about_page}>
        <div className="wrapper">
            <div className={styles.profile}>
                <Title ttl="Profile" sub="自己紹介" />
                <div className={styles.flex}>
                    <div className={styles.imgarea}>
                        <img src="/img/zibun.JPG" alt="しゅんでぃーの写真"/>
                    </div>

                    <div className={styles.textarea}>
                        <h2>しゅんでぃー</h2>
                        <p className={styles.desc}>
                            高専卒。Webサイト制作のフロントエンド・コーディング受託制作と請負制作専門にしている兼業フリーランスです。
                            実務では大手アパレルブランドのECサイト内のコーディング業務・管理運用業務を行っています。
                            得意領域はフロントエンドでHTML/CSS/Javascriptだけでなく、ReactやNextなどのモダンフロントエンド技術もキャッチアップしています。
                        </p>
                        <div className={styles.sns}>
                            <Link href="https://github.com/kamishund">
                                <a className={styles.ln}>github</a>
                            </Link>

                            <Link href="https://twitter.com/shund_webcr">
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

export async function getStaticProps() {
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      works: data.contents.filter((work)=>{ return work.home})
    },
    revalidate: 3,
  };
}

