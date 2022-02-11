import Layout from '../components/Layout'
import MainNews from '../components/main/MainNews'
import Mainvisual from '../components/visual/Mainvisual'
import { getAllWorks } from '../lib/works'

export default function Home({posts}) {
  console.log(posts)
  return (
   <Layout>
     <Mainvisual />
     <MainNews />
     
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