import React from 'react'
import Style from './about.module.css'

export default function About() {
  return (
    <section className={Style.about}>
      <div className='container d-flex flex-column justify-content-center align-items-center gap-5 p-5 '>
        <h2 className='mt-5 fs-1 fw-bold'>ABOUT</h2>
        <div className='d-flex gap-5 fs-5 mx-5'>
          <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
        </div>
        <button type='submit' className='btn btn-outline-light w-25 fs-4'>Download</button>
      </div>
    </section>
  )
}
