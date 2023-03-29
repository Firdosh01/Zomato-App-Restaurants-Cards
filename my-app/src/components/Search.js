import React, { useState } from 'react'
import style from './style.css'
import Fooddata from './FoodData'
import Cards from './Cards'

function Search() {

    const [fdata, setfdata] = useState(Fooddata)
    console.log(fdata)

    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
  return (
    <>
    <div className='wrapper'>
        <img src={zomatologo} alt="" />
        <h2 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3">Search Filter App</h2>
    </div>

    <form className='form'>
        <input type="text" placeholder='Search for restaurant, cuision or a dish' />
        <button className='btn'>Submit</button>

    </form>

    <section className="container mt-4 item-section">
        <h2 className="font-normal ">Inspiration for your first order</h2>

        <div className="row">
            <Cards data= {fdata} />
        </div>

    </section>

    </>
  )
}

export default Search
