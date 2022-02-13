
import styles from './MainNews.module.scss'
import React from "react"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '../parts/Button';
export default function MainNews() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        draggable: false,
        autoplaySpeed: 6000,
        speed: 500,
        autoplay: true,
        dots:true,
        arrows: false
      };

  return (
      <>
      
        <section className={styles.mgt}>
            <div className='wrapper'>
                <div className={styles.ttl}>
                    <h2>Service<span>サービス</span></h2>
                    <div className={styles.ttl_inner}>
                        <p>ホームページ制作を中心にECサイトの構築やウェブアプリケーション開発まで行います。</p>
                        <Button link="/service">
                            More
                        </Button>
                    </div>
                </div>

                {/*  */}
                <Slider {...settings}>
                        <div className="imgWrap">
                            <div className='img-wrap-text'>
                                <p className='num'>01-</p>
                                <h3>ホームページ制作</h3>
                                <p className='desc'>
                                    WordpressなどのCMSやSTUDIOを用いたホームページを作成します。基本的なSEO対策はもちろんのこと、お客様の要望に合わせたプランをフレキシブルに提案します。
                                </p>
                            </div>
                            
                            <img className='sliderImg' src="img/slide1.jpg" alt="ホームページ制作" />
                        </div>

                        <div className="imgWrap">
                            <div className='img-wrap-text'>
                                <p className='num'>02-</p>
                                <h3>Bubbleウェブアプリ開発</h3>
                                <p className='desc'>
                                    ノーコードツール「bubble」を用いたシステム開発を行います。
                                    予約システム・タスク管理・SNSなどお客様の業務を快適に
                                    するウェブアプリケーションを作成します。
                                </p>
                            </div>
                            
                            <img className='sliderImg' src="img/slide2.jpg" alt="Bubbleウェブアプリ開発" />
                        </div>

                        <div className="imgWrap">
                            <div className='img-wrap-text'>
                                <p className='num'>03-</p>
                                <h3>ECサイト構築</h3>
                                <p className='desc'>
                                    shopifyを用いたECサイト構築を行います。ECサイトは作成する前後もとても大切なので、実務での経験をもとにSNSなどの運用やサイト運用をサポートさせていただき、作って終わりではなく売れるECサイト制作をします。
                                </p>
                            </div>
                            
                            
                            <img className='sliderImg' src="img/slide3.jpg" alt="ECサイト構築" />
                        </div>
                </Slider>                    
                {/*  */}
            </div>
        </section>
      </>
    
  );
}

