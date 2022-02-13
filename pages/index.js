import Layout from '../components/Layout'
import MainNews from '../components/main/MainNews'
import Button from '../components/parts/Button'
import Mainvisual from '../components/visual/Mainvisual'
import styles from "../styles/Home.module.scss"
import Title from '../components/parts/Title'
import Card from '../components/parts/Card'
import Link from "next/link";
import ContactButton from '../components/parts/ContactButton'
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
              <div className={styles.spd}>
                <Button link='/works'>
                  More
                </Button>
              </div>
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
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      works: data.contents.filter((work)=>{ return work.home})
    },
    revalidate: 3,
  };
}

