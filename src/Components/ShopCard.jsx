import React, { useEffect, useState } from 'react'
import '../Style/ShopCard.css'
import CONFIG from '../stores/config';
import { useParams } from 'react-router-dom'
function ShopCard() {
    let location = useParams()
    const[pro, setPro] = useState(null)
    console.log(location.productID);

    useEffect(()=>{
        getProduct()
    }, [])
    async function getProduct() {
        let fetchP =await fetch("https://market-online.onrender.com/api/menu")
        let json = await fetchP.json()
        console.log(json);
        let filterdProduct = json.find((item)=> item.id ===Number(location.productID))
        console.log(filterdProduct);
        setPro(filterdProduct)
    }
  return (
   <div className='Card'>
        <div className='container'>
        <div className='Card-wrapper'>
            <div className='Card-img'>
                <img src={CONFIG.API_URL + pro?.image} alt="" />
            </div>
            <div className='Card-content'>
                <h1>
                   {pro?.name}
                </h1>
                <div className='Card-line'>

                </div>
                <p>
                    {pro?.info}
                </p>
                <h2>
                    <span>
                            {pro?.price}
                    </span> so`m
                </h2>
                <a href="https://t.me/sert_070" target="_blank" rel="noopener noreferrer">Sotib olish</a>
            </div>
        </div>
        </div>
   </div>
  )
}

export default ShopCard 