import Link from 'next/link';
import Layout from '../../../components/Layout'
import styles from "../../../styles/Work.module.scss"
import Title from '../../../components/parts/Title'
import Card from '../../../components/parts/Card'


import { Pagination } from '../../../components/Pagination';

const PER_PAGE = 5; 

// pages/blog/[id].js
export default function BlogPageId({ works, totalCount }) {

    
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
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_API_KEY }
  };

  const res = await fetch('https://kamishund.microcms.io/api/v1/works', key)

  const repos = await res.json();

  const pageNumbers = [];

  const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) =>  `/works/page/${repo}`)

  return { paths, fallback: true };
};

// データを取得
export const getStaticProps = async (context) => {
  const id = context.params.id;

  const key = {
    headers: { 'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_API_KEY}
  };

  const data = await fetch(
    `https://kamishund.microcms.io/api/v1/works?offset=${(id - 1) * 12}&limit=12`,
    key
  ).then(res => res.json()).catch(() => null)

  return {
    props: {
      works: data.contents,
      totalCount: data.totalCount
    },
    revalidate: 3,
  };
};