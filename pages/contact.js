import Layout from '../components/Layout'
import styles from "../styles/Contact.module.scss"
import Link from "next/link";
import Title from '../components/parts/Title';
import { useState } from "react";


export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("送信中");
  
      let data = {
        name,
        email,
        message,
      };
  
      fetch("/api/mail", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          console.log("送信が成功しました");
          setSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
          window.location.href = '/success';
        }
      });
    };

  return (
   <Layout title="Contact">
     <section>
         <div className="wrapper">
             <div className={styles.mgt}><Title ttl="Contact" sub="お問い合わせ" /></div>
             <p className={styles.desc}>
                 お問い合せ・ご質問などは、下記のフォームにご入力のうえ送信してください。<br/>後日担当者よりご連絡差し上げます。<br/>
                 また、<Link href="https://twitter.com/shund_webcr"><a>Twitter</a></Link>のDMでも承っております。お気軽にご相談ください。
             </p>
         </div>
      <div className={styles.bg}>
        <form className={styles.main}>
            <formGroup className={styles.inputGroup}>
            <label htmlFor="name">名前</label>
            <input
                type="text"
                onChange={(e) => {
                setName(e.target.value);
                }}
                name="name"
                className={styles.inputField}
            />
            </formGroup>

            <formGroup className={styles.inputGroup}>
            <label htmlFor="email">メールアドレス</label>
            <input
                type="email"
                onChange={(e) => {
                setEmail(e.target.value);
                }}
                name="email"
                className={styles.inputField}
            />
            </formGroup>

            <formGroup className={styles.inputGroup}>
            <label htmlFor="message">メッセージ</label>
            <textarea
                type="text"
                onChange={(e) => {
                setMessage(e.target.value);
                }}
                name="message"
                className={styles.inputArea}
            />
            </formGroup>

            <input
            type="submit"
            value="Send"
            disabled={!name || !message || !email.includes('@')}
            onClick={(e) => {
                handleSubmit(e);
            }}
            className={styles.submit}
            />
        </form>

      </div>
     </section>
   
   </Layout>
  )
}