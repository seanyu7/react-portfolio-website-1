import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>yuinzjumpuphand7@yahoo.co.jp</h5>
            <a href="mailto:yuinzjumpuphand7@yahoo.co.jp">Send a message</a>
          </article>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>yuinzjumpuphand7@gmail.com</h5>
            <a href="mailto:yuinzjumpuphand7@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>You can see my career and send message for a hiring !</h5>
            <a href="https://www.linkedin.com/in/yu-takaki/">My LinkedIn page</a>
          </article>
        </div>
        
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name='message' row="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default contact

/*一つすることが残っている。テキストボックス内に何か文章を書いたときに自動的にメールとして処理してくれるものをmessage JSにて実装する必要がある*/ 