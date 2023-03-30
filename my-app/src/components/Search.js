import React, { useEffect, useState } from 'react'
import style from './style.css'
import Fooddata from './FoodData'
import Cards from './Cards'

function Search() {

    const [fdata, setfdata] = useState(Fooddata)
    // console.log(fdata)
    const [copydata, setCopydata] = useState([])


    const changeData = (e) => {
        let getchangeData = e.toLowerCase()

        if(getchangeData == ""){
            setCopydata(fdata)
        }else{
            let storeData = copydata.filter((element, k) => {
              return  element.rname.toLowerCase().match(getchangeData);
              
            })
            setCopydata(storeData)
        }

    }

    useEffect(() => {
        setTimeout(() => {
            setCopydata(Fooddata)
        }, 3000)
    }, [])

    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
    return (
        <>
            <div className='wrapper'>
                <img src={zomatologo} alt="" />
                <h2 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3">Search Filter App</h2>
            </div>

            <form className='form'>
                <input type="text" placeholder='Search for restaurant, cuision or a dish' onChange={(e) => changeData(e.target.value)} />
                <button className='btn'>Submit</button>

            </form>

            <section className="container">
                <h2 className="font-normal ">Inspiration for your first order</h2>

                <div className="flex items-start justify-center row">
                    {copydata && copydata.length ? <Cards data={copydata} /> : "empty"}
                </div>

            </section>

        </>
    )
}

export default Search
