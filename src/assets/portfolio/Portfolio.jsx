import React from 'react'
import port1 from "../imgs/port1.png"
import port2 from "../imgs/port2.png"
import port3 from "../imgs/port3.png"
import port4 from "../imgs/port4.png"
import port5 from "../imgs/port5.png"
import port6 from "../imgs/port6.png"
export default function Portfolio() {
  return (
    <section className='my-5 '>
      <div className='container'>
        <h2 className='text-center'>Portfolio</h2>
        <div className='row '>
          <div className='col-md-4 mt-5'>
            <div className="card" >
              <img src={port1} className="card-img-top" />
            </div>

          </div>
          <div className='col-md-4 mt-5'>
            <div className="card">
              <img src={port2} className="card-img-top" />
            </div>

          </div><div className='col-md-4 mt-5'>
            <div className="card">
              <img src={port3} className="card-img-top" />
            </div>

          </div><div className='col-md-4 mt-5'>
            <div className="card">
              <img src={port4} className="card-img-top" />
            </div>

          </div><div className='col-md-4 mt-5'>
            <div className="card">
              <img src={port5} className="card-img-top" />
            </div>

          </div><div className='col-md-4 mt-5'>
            <div className="card">
              <img src={port6} className="card-img-top" />
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
