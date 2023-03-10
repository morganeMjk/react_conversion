import React from 'react'

export default function Footer() {
  return (
<footer className='footer'>
        <ul className='footer__ul'>
            <li className='footer__ul__li'><a href="http://google.com" className='footer__ul__a'>About</a> - </li>
            <li className='footer__ul__li'><a href="http://google.com" className='footer__ul__a'>Contact</a> - </li>
            <li className='footer__ul__li'><a href="http://google.com" className='footer__ul__a'>Terms of Use</a> - </li>
            <li className='footer__ul__li'><a href="http://google.com" className='footer__ul__a'>Privacy Policy</a></li>
        </ul>
        <div className='footer__rights'>
            <p className='footer__rights__p'>My website 2022</p>
            <p className='footer__rights__p--active'>-</p>
            <p className='footer__rights__p'>All rights reserved</p>
        </div>
    </footer>
  )
}
