import Layout from '../../components/Layout'
import { client } from '../../lib/works';
import { useRouter } from "next/router"
import styles from "../../styles/WorksDetail.module.scss"
import { useEffect } from 'react';
import Link from "next/link";
export default function WorksDetail({works}) {

  const router = useRouter()
  useEffect(()=>{
    var test = document.getElementById('content');
    if(!router.isFallback){
      test.insertAdjacentHTML('afterbegin',works?.body);
    }

  },[])

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
   <Layout title={works?.title} noindex={true}>
     <section>
      <div className={styles.bg}>
        <div className={styles.ttlwrap}>
          <p>{new Date(works?.createdAt).toLocaleDateString()}</p>
          <h1>{works?.title}</h1>
        </div>
        {/* <img className={styles.thum} src={}/> */}
        <img className={styles.design} src={works?.design.url} alt={works?.title}/>

        <div className={styles.bodywrap} id="content">

        <Link href={works?.link}>
            <a className={styles.pbtn}>View</a>
        </Link>
        </div>


      </div>
     </section>
   
   </Layout>
  )
}


export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "works" });
  const paths = data.contents.map((content) => {
    return {
      params: {
        id: String(content.id),
      },
    };
  });
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const data = await client.get({ endpoint: "works", contentId: id });

  return {
    props: {
      works: data,
    },
    revalidate: 3,
  };
};
