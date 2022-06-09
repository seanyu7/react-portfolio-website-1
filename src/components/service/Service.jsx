import React from 'react'
import './service.css'
import {FcCheckmark} from 'react-icons/fc'

/* ここはあとで自分がどのようにしてプログラミング言語等を習得したのかについてまとめる。使った教材や参考にした動画などの紹介をする*/
const Service = () => {
  return (
    <section id='service'>
      <h5>How I Learnt Programming</h5>
      <h2>Tools that I have Used to learn to code</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Textbook</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <FcCheckmark className='service__list-icon'/>
              <p>Web系エンジニアになろうー勝又健太 著</p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon'/>
              <p>基本情報技術者 - きたみりゅうじ 著</p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon'/>
              <p>Javascript「超」入門 - 狩野祐東 著</p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon'/>
              <p>HTML&CSSとデザイン 入門講座 - SB creative</p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon'/>
              <p>React実践の教科書 - じゃけえ 著</p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon'/>
              <p>ワーク・イン・テック！ - 森山大郎 著</p>
            </li>
          </ul>
        </article>
        {/*this is the end of the Textbook*/}

        <article className='service'>
          <div className="service__head">
            <h3>Online Salon</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <FcCheckmark className='service__list-icon'/>
              <p>Qin Salon</p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon'/>
              <p>Techbowl</p>
            </li>
            
          </ul>
        </article>
        {/*this is the end of the online salon*/}

        <article className='service'>
          <div className="service__head">
            <h3>Video</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <FcCheckmark className='service__list-icon'/>
              <p>Youtube</p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon'/>
              <p>Udemy</p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon'/>
              <p>video from Qin salon</p>
            </li>
            <li>
              <FcCheckmark className='service__list-icon'/>
              <p>Freecodecamp</p>
            </li>
            
          </ul>
        </article>
        {/*this is the end of the Content Cretion*/}

        
          

      </div>

    </section>
  )
}

export default Service