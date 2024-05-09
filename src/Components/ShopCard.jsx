import React from 'react'
import '../Style/ShopCard.css'
function ShopCard() {
  return (
   <div className='Card'>
        <div className='container'>
        <div className='Card-wrapper'>
            <div className='Card-img'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYyGnSwypKgePPJ0-2L0w9VXbhZcqglKE7g&usqp=CAU" alt="" />
            </div>
            <div className='Card-content'>
                <h1>
                    Фйтболка 
                </h1>
                <div className='Card-line'>

                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores id illum quo porro laboriosam dolor similique fugit amet, cumque aliquam.
                </p>
                <h2>
                    <span>
                            2000
                        </span> so`m
                </h2>
                <a href="https://t.me/sert_070" target="_blank" rel="noopener noreferrer">  Купит</a>
            </div>
        </div>
        </div>
   </div>
  )
}

export default ShopCard 