import React, { useState } from 'react'
import './contactForm.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import emailjs from 'emailjs-com';
import SnackBar from '../SnackBar/SnackBar';

const ContactForm = () => {
    let [email, setEmail] = useState({name: '',email: '',message: ''})
    let [emailSent, setEmailSent] = useState(false)
    const style = {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'var(--textfield-border-color)',
        '&:hover': {
          borderColor: 'red',
      },
      },  
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            border: 'var(--contact-border)',
            color: 'var(--contact-color)'
          },
          '&:hover fieldset': {
            borderColor: 'var(--hover-textfield)',
          },
        },
         input: { color: 'var(--contact-text-color)' } ,
        '& label': {
          color:'var(--label-color)',
            '&.Mui-focused': {
              color: 'var(--contact-color)'
            }
          },
        width: '100%',
        margin: '1rem 0rem'       
      } 
      let sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_v1cgva9', 'template_0unahwb', e.target, 'mj8OtvvSNN98qSM54')
          .then((result)=>{
            setEmailSent(true)
          },(error)=>{
          })
          e.target.reset()
      }
    
      let handleChange = (e) => {
        e.preventDefault()
        setEmail({
          ...email,
          [e.target.name]:e.target.value
        })
      }
  return (
    <form className = 'form__container' onSubmit={ sendEmail }>
        <TextField
              label = 'Name'
              name = 'name'              
              id = 'outlined-start-adornment'
              sx = { style }
              placeholder = 'Insert your name'
              InputProps = {{
                startAdornment: <InputAdornment position='start'></InputAdornment>,
              }}
              onChange = {(e)=>{ handleChange(e) }}
              required
        />
        <TextField
          label = 'Mail'
          name = 'email'
          type = 'email'
          id = 'outlined-start-adornment'
          sx = { style }
          placeholder = 'Insert your email'
          InputProps = {{
            startAdornment: <InputAdornment position='start'></InputAdornment>,
          }}
          onChange = {(e)=>{ handleChange(e) }}
          required
        />
                <TextField
          label = 'Message'
          name = 'message'
          multiline
          rows = {4}
          id = 'outlined-start-adornment'
          sx = { style }
          placeholder = 'Write your message'
          InputProps = {{
            startAdornment: <InputAdornment position='start'></InputAdornment>,
            style: { color: "var(--contact-text-color)", borderColor: "yellow" },
          }}
          onChange = {(e)=>{ handleChange(e) }}
          required
        />
        <button type='submit' className='button button--flex contact__button'>
            Send Message  <i class='uil uil-message' style={{fontSize: '23px',marginLeft:'.2rem', backgroundColor: 'transparent'}}></i>
        </button>
        {emailSent&&(<SnackBar />)}
    </form>
  )
}

export default ContactForm