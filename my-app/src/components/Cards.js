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
                <img src="https://th.bing.com/th/id/OIP.djpxK53trOX6J86sSNK9FQHaE5?pid=ImgDet&rs=1" alt="" />

                <div class="left-text">
                  <h3>Grill Inn</h3>
                  <span>3.8★</span>
                </div>
                <div class="right-text">
                  <p>Burger, Pizza, Sandwich, Fast</p>
                  <p>₹100 for one</p>
                </div>
                <div className='line'></div>
                <div class="little">
                  <h3>Img</h3>
                  <p>725+ orders placed from here recently</p>

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
