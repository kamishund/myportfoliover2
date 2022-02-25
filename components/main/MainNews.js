
import styles from './MainNews.module.scss'
import React from "react"
import Title from '../parts/Title';

export default function MainNews() {


  return (
      <>
      <section className={styles.serv_sec}>
        <div className='wrapper'>
        <Title ttl="Sevice" sub="サービス" />
            <div className={styles.grid}>
                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <img src="img/html.png" />
                    </div>
                    <p className={styles.item_ttl}>
                        HTML/CSS
                    </p>
                    <p className={styles.item_desc}>
                    デザインカンプ通りのコーディング行います。正しく美しいマークアップと、今後の変更への強さを考慮しています。レスポンシブ対応/Sassを用いたコーディング
                    </p>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <img src="img/wp.png" />
                    </div>
                    <p className={styles.item_ttl}>
                       WordPress
                    </p>
                    <p className={styles.item_desc}>
                     CMSシェアトップを誇るWordPressの構築ができます。オリジナルテーマ作成/お問い合わせフォーム/カスタム投稿タイプ/カスタムフィールド設計
                    </p>
                </div>
                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <img src="img/js.png" />
                    </div>
                    <p className={styles.item_ttl}>
                        JavaScript
                    </p>
                    <p className={styles.item_desc}>
                        jQueyをはじめ、React,Nextなどのトレンドにマッチしたフレームワークが使用できます。API連携/バックエンドとの連携/サイト高速化
                    </p>
                </div>
            </div>
        </div>
      </section>
      </>
    
  );
}

