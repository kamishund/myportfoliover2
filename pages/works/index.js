import Layout from '../../components/Layout'
import Button from '../../components/parts/Button'
import { getAllWorks } from '../../lib/works'
import styles from "../../styles/Work.module.scss"
import Title from '../../components/parts/Title'
import Card from '../../components/parts/Card'
import Link from "next/link";


export default function Works({posts}) {
  // console.log(posts)

  if (!posts) {
    return <div>Loading...</div>
  }

  return (
   <Layout>
     
     <section className={styles.work_page}>
       <div className={styles.wrapper}>
       <Title ttl="Works" sub="実績"/>
          <div className={styles.flex}>
              {
                posts?.map((post)=>(
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

       
       </div>
     </section>

   </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllWorks();
  return {
    props: { posts },
    revalidate: 3,
  };
}