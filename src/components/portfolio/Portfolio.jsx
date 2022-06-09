import React from 'react'
import './portfolio.css'
import img1 from '../../assets/DogApplication.jpg'

const Portfolio = () => {
  return (
    <section id='poertfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img1} alt="This is the very fist website that Imade" />
          </div>
           <h3>Random dog applcation for TechTrain</h3>
           <a href="http://github.com" className='btn'>Github</a>
           <a href="http://github.com" className='btn btn-primary'>live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img1} alt="This is the very fist website that Imade" />
          </div>
           <h3>Random dog applcation for TechTrain</h3>
           <a href="http://github.com" className='btn'>Github</a>
           <a href="http://github.com" className='btn btn-primary'>live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img1} alt="This is the very fist website that Imade" />
          </div>
           <h3>Random dog applcation for TechTrain</h3>
           <a href="http://github.com" className='btn'>Github</a>
           <a href="http://github.com" className='btn btn-primary'>live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img1} alt="This is the very fist website that Imade" />
          </div>
           <h3>Random dog applcation for TechTrain</h3>
           <a href="http://github.com" className='btn'>Github</a>
           <a href="http://github.com" className='btn btn-primary'>live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img1} alt="This is the very fist website that Imade" />
          </div>
           <h3>Random dog applcation for TechTrain</h3>
           <a href="http://github.com" className='btn'>Github</a>
           <a href="http://github.com" className='btn btn-primary'>live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img1} alt="This is the very fist website that Imade" />
          </div>
           <h3>Random dog applcation for TechTrain</h3>
           <a href="http://github.com" className='btn'>Github</a>
           <a href="http://github.com" className='btn btn-primary'>live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio