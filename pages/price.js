import Layout from '../components/Layout'
import styles from "../styles/Service.module.scss"
import Title from '../components/parts/Title'
import Link from "next/link";


export default function About() {

  return (
   <Layout title='Price'>
     
     <section className={styles.service_page}>
     <div className="wrapper">
     <Title ttl="Price" sub="料金表" />
     <p>スマホでご覧の方は横スクロールしてご覧ください</p>
     </div>
     
    
     <div className="wrapper">
     <div className='ovf'>
      <table>
      <thead>
          <tr>
              <th scope="col">プラン</th>
              <th scope="col">内容</th>
              <th scope="col">価格</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <th>トップページコーディング</th>
              <td data-label="内容" className="txt">トップページのコーディング</td>
              <td data-label="価格" className="price">¥30,000</td>
          </tr>
          <tr>
              <th>下層ページコーディング</th>
              <td data-label="内容" className="txt">下層ページ1ページにつき</td>
              <td data-label="価格"className="price">¥10,000</td>
          </tr>
          <tr>
              <th>お問い合わせフォーム導入</th>
              <td data-label="内容" className="txt">お問い合わせフォームを設置します。（Wordpress）</td>
              <td data-label="価格"className="price">¥10,000</td>
          </tr>
        <tr>
              <th>jQueryでのUI実装</th>
              <td data-label="内容" className="txt">ハンバーガーメニューやスライダー、アコーディオンパネルなど</td>
              <td data-label="価格" className="price">¥10,000</td>
          </tr>
          <tr>
              <th>WordPress導入</th>
              <td data-label="内容" className="txt">WordPressを導入します</td>
              <td data-label="価格"className="price">¥50,000</td>
          </tr>

      </tbody>
  </table>   
              
      </div>
     </div>
     
     </section>

   </Layout>
  )
}