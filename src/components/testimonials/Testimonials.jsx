

/*ここは一度確認の上、なぜswipeが動いていないのかについて考えなくてはならない。おそらくimportの仕方に問題があると考える。あとMapを回してコードを綺麗に保つ必要がある。 */
import React from 'react'
import './testimonials.css'
import AVTR1 from'../../assets/taishin.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const Testimonials = () => {
  return (
    <section id='testimonials' >
     <h5>Review from Engineer</h5>
     <h2>Testimonials</h2>

    <Swiper className="container testimonials__container"
    modules={[Pagination]}
    spaceBetween={40}
    slidesPerView={1}
    
    pagination={{ clickable: true }}
  >


      <SwiperSlide className='testimonial'>
      <div className="engineer__avatar">
        <img src={AVTR1} alt="This is image of Taishin" />
      </div>
        <h5 className='cliant__name'>Taishin Sato</h5>
        <small className='engineer review'>
          He is software engineer at Cyber agent in Japan. He is specialized in front and back end.
          He reviewed my codes and think much easier way for other engineer to read my code.
          He also give me an advice for becoming developer engineer and showed me the way to become it.
        </small>
        
        <a href="https://www.linkedin.com/in/taishin-sato-a304981a7/" className='linkedinOfTaishin'>linkedin of Taishin Sato</a>

      </SwiperSlide>
      
      <SwiperSlide className='testimonial'>
      <div className="engineer__avatar">
        <img src={AVTR1} alt="This is image of Taishin" />
      </div>
        <h5 className='cliant__name'>Taishin Sato</h5>
        <small className='engineer review'>
          He is software engineer at Cyber agent in Japan. He is specialized in front and back end.
          He reviewed my codes and think much easier way for other engineer to read my code.
          He also give me an advice for becoming developer engineer and showed me the way to become it.
        </small>
        
        <a href="https://www.linkedin.com/in/taishin-sato-a304981a7/" className='linkedinOfTaishin'>linkedin of Taishin Sato</a>

      </SwiperSlide>
      
      <SwiperSlide className='testimonial'>
      <div className="engineer__avatar">
        <img src={AVTR1} alt="This is image of Taishin" />
      </div>
        <h5 className='cliant__name'>Taishin Sato</h5>
        <small className='engineer review'>
          He is software engineer at Cyber agent in Japan. He is specialized in front and back end.
          He reviewed my codes and think much easier way for other engineer to read my code.
          He also give me an advice for becoming developer engineer and showed me the way to become it.
        </small>
        
        <a href="https://www.linkedin.com/in/taishin-sato-a304981a7/" className='linkedinOfTaishin'>linkedin of Taishin Sato</a>

      </SwiperSlide>
      
      <SwiperSlide className='testimonial'>
      <div className="engineer__avatar">
        <img src={AVTR1} alt="This is image of Taishin" />
      </div>
        <h5 className='cliant__name'>Taishin Sato</h5>
        <small className='engineer review'>
          He is software engineer at Cyber agent in Japan. He is specialized in front and back end.
          He reviewed my codes and think much easier way for other engineer to read my code.
          He also give me an advice for becoming developer engineer and showed me the way to become it.
        </small>
        
        <a href="https://www.linkedin.com/in/taishin-sato-a304981a7/" className='linkedinOfTaishin'>linkedin of Taishin Sato</a>

      </SwiperSlide>
      
      <SwiperSlide className='testimonial'>
      <div className="engineer__avatar">
        <img src={AVTR1} alt="This is image of Taishin" />
      </div>
        <h5 className='cliant__name'>Taishin Sato</h5>
        <small className='engineer review'>
          He is software engineer at Cyber agent in Japan. He is specialized in front and back end.
          He reviewed my codes and think much easier way for other engineer to read my code.
          He also give me an advice for becoming developer engineer and showed me the way to become it.
        </small>
        
        <a href="https://www.linkedin.com/in/taishin-sato-a304981a7/" className='linkedinOfTaishin'>linkedin of Taishin Sato</a>

      </SwiperSlide>
    </Swiper>
    </section>
  )
}

export default Testimonials