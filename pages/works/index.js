import Layout from '../../components/Layout'
import styles from "../../styles/Work.module.scss"
import Title from '../../components/parts/Title'
import Card from '../../components/parts/Card'


import { Pagination } from '../../components/Pagination';


export default function Works({works,totalCount }) {
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

          <Pagination totalCount={totalCount} />

       
       </div>
     </section>

   </Layout>
  )
}


// export async function getStaticProps() {
//   const data = await client.get({ endpoint: "works" });

//   return {
//     props: {
//       works: data.contents,
//     },
//     revalidate: 3,
//   };
// }

export const getStaticProps = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_API_KEY},
  };
  const data = await fetch('https://kamishund.microcms.io/api/v1/works?offset=0&limit=12', key)
    .then(res => res.json())
    .catch(() => null);

  return {
    props: {
      works: data.contents,
      totalCount: data.totalCount
    },
    revalidate: 3,
  };
};