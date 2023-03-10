import React, { useRef, useState } from 'react'

export default function Form() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const firstNameError = useRef(null);
    const lastNameError = useRef(null);
    const emailError = useRef(null);
    const phoneError = useRef(null);
    const messageError = useRef(null);

    const verification = (event) => {

        event.preventDefault()

        const nameRegex = /^[a-zA-Z ]+$/;
        const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        const messageRegex = /^.{6,}$/;


        firstNameError.current.style.display = "none";
        lastNameError.current.style.display = "none";
        emailError.current.style.display = "none";
        phoneError.current.style.display = "none";
        messageError.current.style.display = "none";


        if (!firstName || !nameRegex.test(firstName)) {
            firstNameError.current.style.display = "block";
        }
        if (!lastName || !nameRegex.test(lastName)) {
            lastNameError.current.style.display = "block";
        }        
        if (!email || !emailRegex.test(email)) {
            emailError.current.style.display = "block";
        }
        if (!phone || !phoneRegex.test(phone)) {
            phoneError.current.style.display = "block";
        }
        if (!message || !messageRegex.test(message)) {
            messageError.current.style.display = "block";
        }


   }
   
    
  return (
    <section className='contact'>
        <h2 className='contact__titre'>Contact us</h2>
        <form method="post" action="traintement.php" id="contactForm" onSubmit={(event) => verification(event)}>
            <fieldset className='contact__formulaire'>
                <div className='contact__formulaire__part'>
                    <div id="inputLabel">
                        <input type="text" name='firstname' id='firstNameInput' placeholder='Firstname' className='contact__formulaire__input' onChange={(event) => setFirstName(event.currentTarget.value)} value={firstName}/>
                        <label ref={firstNameError} htmlFor='firstname' id="firstNameError" className='contact__formulaire__error'>Saisissez votre nom</label>
                    </div>
                    <div id="inputLabel">
                        <input type="text" name='lastname' id='lastNameInput' placeholder='Lastname' className='contact__formulaire__input' onChange={(event) => setLastName(event.currentTarget.value)} value={lastName}/>
                        <label ref={lastNameError} htmlFor='lastname' id="lastNameError" className='contact__formulaire__error'>Saisissez votre nom</label>
                    </div>
                </div>

                <div className='contact__fomulaire__part'>
                    <div id="inputLabel">
                        <input type="email" name='email' id='emailInput' placeholder='Email adress' className='contact__formulaire__input' onChange={(event) => setEmail(event.currentTarget.value)} value={email}/>
                        <label ref={emailError} htmlFor='email' id="emailError" className='contact__formulaire__error'>Saisissez une adresse mail valide</label>
                    </div>
                    <div id="inputLabel">
                        <input type="tel" name='phone' id='phoneInput' placeholder='Phone number' maxLength={"10"} className='contact__formulaire__input' onChange={(event) => setPhone(event.currentTarget.value)} value={phone} />
                        <label ref={phoneError} htmlFor='phone' id="phoneError" className='contact__formulaire__error'>Saisissez un numéro de téléphone valide</label>
                    </div>
                </div>
                <div id="inputLabel">
                    <textarea name="message" id="messageInput" cols="18" rows="8" placeholder="Type your message" className='contact__formulaire__input' onChange={(event) => setMessage(event.currentTarget.value)} value={message}></textarea>
                    <label ref={messageError} htmlFor='message' id="messageError" className='contact__formulaire__error'>Votre message doit contenir au moins 10 caractères</label>
                </div> 
                    <button type="submit" className='contact__formulaire__submit' >Submit</button>
            </fieldset>
        </form>
    </section>
  )
}