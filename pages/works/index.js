import Layout from '../../components/Layout'
import Button from '../../components/parts/Button'
import { client, getAllWorks } from '../../lib/works'
import styles from "../../styles/Work.module.scss"
import Title from '../../components/parts/Title'
import Card from '../../components/parts/Card'
import Link from "next/link";


export default function Works({works}) {
  // console.log(works)

  if (!works) {
    return <div>Loading...</div>
  }

  return (
   <Layout title="Works" noindex={true} >
     
     <section className={styles.work_page}>
       <div className={styles.wrapper}>
       <Title ttl="Works" sub="実績"/>
          <div className={styles.flex}>
              {
                works?.map((post)=>(
                  <>
                  <Card 
                    key={post.id} 
                    ey={post.id} 
                    id={post.id} 
                    ttl={post.title} 
                    date={post.createdAt} 
                    imgurl={post.image.url} 
                     />
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
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      works: data.contents,
    },
    revalidate: 3,
  };
}