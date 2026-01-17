import React from 'react'
import style from './contact.module.css'
export default function Contact() {
  return (
    <>
      <div className='d-flex flex-column gap-5 justify-content-center align-items-center mt-5'>
        <h2 className={`${style.contact}'fs-2 fw-bold`}>CONTACT ME</h2>
        <form className='d-flex flex-column gap-4 fs-3 w-50'>
          <input type="text" name='name' placeholder='Full name' required className=' border-0 border-bottom border pb-3' />
          <input type="email" name='email' placeholder='Email Address' required className=' border-0 border-bottom border pb-3' />
          <input type="tel" name="phone" placeholder='Phone Number' required className=' border-0 border-bottom border pb-3' />
          <textarea name="message" placeholder='Message' required className=' border-0 border-bottom border pb-2' ></textarea>
          <button type='submit' className={`${style.bgButton} btn-outline-light w-25 py-3 text-center border-0 rounded-3`}>Send</button>

        </form>
      </div>
    </>
  )
}
