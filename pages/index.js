import Layout from '../components/Layout'
import MainNews from '../components/main/MainNews'
import Mainvisual from '../components/visual/Mainvisual'

export default function Home() {
  return (
   <Layout>
     <Mainvisual />
     <MainNews />
   </Layout>
  )
}
