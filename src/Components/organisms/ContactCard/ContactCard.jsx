import React from 'react'
import './contactCard.css'


const ContactCard = ({ icon, name, contact, link }) => {
  return (
    <div className='card__container'>
        <a href={link} rel="noopener noreferrer" target='_blank' className="contact-icon">
            <i class={icon}></i>
        </a>
        <div className="social__name">{name}</div>
        <div className="contact__info">{contact}</div>
        <a href={link} rel="noopener noreferrer" target='_blank' className="write__me">Write me <i class="uil uil-arrow-right"></i></a>
    </div>
  )
}

export default ContactCard