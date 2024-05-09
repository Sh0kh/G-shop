import React from 'react'
import '../Style/ShopHero.css'
import { NavLink } from 'react-router-dom'
import  { useState } from 'react';

function ShopHero() {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonId) => {
      setSelectedButton(buttonId);
    };

  return (
    <section className='ShopHero'>
        <div className='container'>
            <h1 >
                Mahsulot
            </h1>
            <div className='ShopHero__nav'>
                <button  onClick={() => handleButtonClick(1)}
                className={selectedButton === 1 ? 'selected' : ''}
                >
                    Futbolka
                </button>
                <button  onClick={() => handleButtonClick(2)}
                className={selectedButton === 2 ? 'selected' : ''}
                >
                    Futbolka
                </button>
                <button
                onClick={() => handleButtonClick(3)}
                className={selectedButton === 3 ? 'selected' : ''}
                >
                    Aksesuar
                </button>
                <button
                onClick={() => handleButtonClick(4)}
                className={selectedButton === 4 ? 'selected' : ''}
                >
                    Dars
                </button>
                <button
                onClick={() => handleButtonClick(5)}
                className={selectedButton === 5 ? 'selected' : ''}
                >
                    Dars
                </button>
            </div>
            <div className='ShopHero_grid'>
            <div className='ShopHero__wrapper'>
                  <NavLink to ="/ShopCard"> 
                  <div className='ShopHero__card'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYyGnSwypKgePPJ0-2L0w9VXbhZcqglKE7g&usqp=CAU" alt="" />
                    <h2>
                        Названия
                    </h2>
                    <span>
                        Цена
                    </span>
                </div>
                  </NavLink>
                
                <div className='ShopHero__card'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYyGnSwypKgePPJ0-2L0w9VXbhZcqglKE7g&usqp=CAU" alt="" />
                    <h2>
                        Названия
                    </h2>
                    <span>
                        Цена
                    </span>
                </div>
                <div className='ShopHero__card'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYyGnSwypKgePPJ0-2L0w9VXbhZcqglKE7g&usqp=CAU" alt="" />
                    <h2>
                        Названия
                    </h2>
                    <span>
                        Цена
                    </span>
                </div>
                <div className='ShopHero__card'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYyGnSwypKgePPJ0-2L0w9VXbhZcqglKE7g&usqp=CAU" alt="" />
                    <h2>
                        Названия
                    </h2>
                    <span>
                        Цена
                    </span>
                </div>
                <div className='ShopHero__card'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYyGnSwypKgePPJ0-2L0w9VXbhZcqglKE7g&usqp=CAU" alt="" />
                    <h2>
                        Названия
                    </h2>
                    <span>
                        Цена
                    </span>
                </div>
                <div className='ShopHero__card'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYyGnSwypKgePPJ0-2L0w9VXbhZcqglKE7g&usqp=CAU" alt="" />
                    <h2>
                        Названия
                    </h2>
                    <span>
                        Цена
                    </span>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ShopHero