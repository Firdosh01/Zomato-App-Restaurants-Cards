import React from 'react'
import style from './style.css'

function Cards({ data }) {
  return (
    <>
      {
        data.map((element, k) => {
          return (
            <>
              <div class="Card-container">
                <img src= {element.imgdata} alt="" />

                <div class="left-text">
                  <h3>{element.rname}</h3>
                  <span>{element.rating}★</span>
                </div>
                <div class="right-text">
                  <p>{element.address}</p>
                  <p>{element.price}</p>
                </div>
                <div className='line'></div>
                <div class="little">
                  <img src={element.arrimg} alt="" />
                  <p>{element.somedata}</p>

                </div>
              </div>
            </>
          )
        })
      }
    </>
  )
}

export default Cards
