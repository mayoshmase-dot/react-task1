import React from 'react'
import style from './hero.module.css'
import logo from "../imgs/Logo.svg"
export default function Hero() {
  return (
<div className={`${style.hero} d-flex flex-column gap-4 justify-content-center align-items-center  `}>
<img src={logo} className='w-25 ' alt="" />
<h1>Start Bootstrap</h1>
<h3>Graphic Artist - Web Designer - Illustrator</h3>
</div> )
}
