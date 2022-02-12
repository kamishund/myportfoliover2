import Layout from '../../components/Layout'
import { getAllWorksIds, getWorksData } from '../../lib/works';
import { useRouter } from "next/router"
import styles from "../../styles/WorksDetail.module.scss"
import { useEffect } from 'react';
import Link from "next/link";
export default function WorksDetail({post}) {
  // console.log(posts)
  const router = useRouter()
  useEffect(()=>{
    var test = document.getElementById('content');
    if(!router.isFallback){
      test.insertAdjacentHTML('afterbegin',post.content.rendered);
    }

  },[])

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
   <Layout title={post?.title.rendered}>
     <section>
      <div className={styles.bg}>
        <div className={styles.ttlwrap}>
          <p>{post.date}</p>
          <h1>{post?.title.rendered}</h1>
        </div>
        {/* <img className={styles.thum} src={post.acf.image.url}/> */}
        <img className={styles.design} src={post.acf.design.url}/>

        <div className={styles.bodywrap} id="content">

        <Link href={post.acf.link}>
            <a className={styles.pbtn}>View</a>
        </Link>
        </div>


      </div>
     </section>
   
   </Layout>
  )
}

export async function getStaticPaths() {
    const paths = await getAllWorksIds();
  
    return {
      paths,
      fallback: true,
    };
}

export async function getStaticProps({ params }) {
  const post = await getWorksData(params.id);
  return {
    props: { post },
    revalidate: 3,
  };
}

