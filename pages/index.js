import Layout from '../components/Layout'
import MainNews from '../components/main/MainNews'
import Button from '../components/parts/Button'
import Mainvisual from '../components/visual/Mainvisual'
import { getAllWorks } from '../lib/works'
import styles from "../styles/Home.module.scss"
import Title from '../components/parts/Title'
import Card from '../components/parts/Card'
import Link from "next/link";
import ContactButton from '../components/parts/ContactButton'


export default function Home({posts}) {


  if (!posts) {
    return <div>Loading...</div>
  }

  return (
   <Layout>
     <Mainvisual />
     <MainNews />
     
     <section className={styles.work_section}>
       <div className='wrapper'>
          <div className={styles.work_ttl}>
              <Title ttl="Works" sub="実績"/>
              <div className={styles.spd}>
                <Button link='/works'>
                  More
                </Button>
              </div>
          </div>

          <div className={styles.flex}>
              {
                posts.map((post)=>(
                  <>
                  <Card 
                    key={post.id} 
                    id={post.id} 
                    ttl={post.title.rendered} 
                    date={post.date} 
                    imgurl={post.acf.image.url} />
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
                <img src="img/voice.jpg" />
              </div>
              <div className={styles.voice_wrap_item}>
                <img src="img/voice2.jpg" />
              </div>
          </div>
       </div>
     </section>


      <section className={styles.contact_section}>
        <h2>お気軽にお問い合わせください</h2>
        <ContactButton>
          Contact
        </ContactButton>
       </section>

   </Layout>
  )
}

export async function getStaticProps() {
  const res = await getAllWorks();
  const posts = res.slice(0,3);
  return {
    props: { posts },
    revalidate: 3,
  };
}