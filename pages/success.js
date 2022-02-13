import Layout from '../components/Layout'
import Link from "next/link";


export default function About() {

  return (
   <Layout title='About'>
     
     <section className="success_page">
        <div className="wrapper">
           <h2>お問い合わせありがとうございます！<br />後日担当者よりご連絡差し上げます。</h2>
           <Link href="/"><a>TOPへもどる</a></Link>
        </div>
     </section>

   </Layout>
  )
}