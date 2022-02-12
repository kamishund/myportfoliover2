import Layout from '../../components/Layout'
import { getAllWorksIds,getAllWorks, getWorksData } from '../../lib/works';


export default function Home({posts}) {
  console.log(posts)
  return (
   <Layout>
    
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
  const posts = await getWorksData(params.id);
  return {
    props: { posts },
    revalidate: 3,
  };
}

