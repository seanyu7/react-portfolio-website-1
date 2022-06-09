import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsGoogle} from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="http://github.com" target="_blank"><BsGithub/></a>
        <a href="http://twitter.com" target="_blank"><BsTwitter/></a>
        <a href="https://www.randstad.co.jp/tenshoku/consultants/manufacturing/" target='_blank'><BsGoogle/></a>
    </div>
  )
}

export default HeaderSocials