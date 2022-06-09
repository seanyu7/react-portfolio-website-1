import React from 'react'
import './about.css'
import ME from '../../assets/seanyutakaki.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Photo of Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>experience</h5>
              <small>1+ years of working experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Cliants</h5>
              <small>50+ company worldwide</small>
            </article>

            <article className='about__card'>
              <BsFolderCheck className='about__icon'/>
              <h5>awards</h5>
              <small>Winning the 1st place as a Asociate consultant in april 2022.</small>
            </article>
          </div>

          <p>
            I am Associate Consultant at Randstad Japan which is the biggest HR company in the world.
            He is responsible for the research phase for executive
            assignments in the industrial sector, primarily EPC, Data center, semiconductor and
            machine industry. His core focus is on senior executives.
          </p>
{/*ここでなぜ自分がフロントエンドエンジニアを目指しているのかについて書く　また将来的にどのようなポジションに向かいたいのか、技術を使って何を成し遂げたいのかについて詳しく書く */}

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About