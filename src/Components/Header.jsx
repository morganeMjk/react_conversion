import React from 'react'

export default function Header() {
  return (
    <header className='header'>
        <h1 className='header__titre'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <div className='header__input'>
            <form action="post" method="post">
                <input type="email" name='mail' id='name' placeholder='Email address' className='header__input__mail' />
                <input type="button" value="Submit" className='header__input__bouton' />
            </form>
        </div>
    </header>
  )
}
