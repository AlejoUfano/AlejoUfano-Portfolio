import React from 'react'
import './contact.css'
import ContactCard from '../../organisms/ContactCard/ContactCard'
import { contact } from '../../../utils/data/contact'
import ContactForm from '../../organisms/ContactForm/ContactForm'

const Contact = () => {
  return (
    <div className='contact__global-container'>
      <div className="contact__title">Get in touch</div>
      <div className="contact__subtitle">Contact Me</div>

      <div className="elements__container">

        <div className="cards__container">
          <div className="cards__title">Talk to me</div>
          {
            contact.map(c=>(
              <ContactCard key={c.name} {...c}/>
            ))
          }
        </div>
        <div className="message__container">
          <div className="message__title">Send me a message</div>
            <ContactForm />
        </div>
      </div>
      
    </div>
  )
}

export default Contact
