import React from 'react'
import '../Style/HomeShop.css'
import '../Style/Media.css'

import  { useState } from 'react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function HomeShop() {

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonId) => {
      setSelectedButton(buttonId);
    };

  return (
    <section className='HomeShop'>
        <div className='container'>
            <h1 >
                Mahsulot
            </h1>
            <div className='HomeShop__nav'>
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
            <div className='HomeShop-wrapper pc'>
                <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>
                    <div className='HomeShop_card'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYyGnSwypKgePPJ0-2L0w9VXbhZcqglKE7g&usqp=CAU" alt="foto" />
                        <h2>
                            Названия
                        </h2>
                        <span>
                            Цена 
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='HomeShop_card'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYyGnSwypKgePPJ0-2L0w9VXbhZcqglKE7g&usqp=CAU" alt="foto" />
                        <h2>
                            Названия
                        </h2>
                        <span>
                            Цена 
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='HomeShop_card'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYyGnSwypKgePPJ0-2L0w9VXbhZcqglKE7g&usqp=CAU" alt="foto" />
                        <h2>
                            Названия
                        </h2>
                        <span>
                            Цена 
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='HomeShop_card'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYyGnSwypKgePPJ0-2L0w9VXbhZcqglKE7g&usqp=CAU" alt="foto" />
                        <h2>
                            Названия
                        </h2>
                        <span>
                            Цена 
                        </span>
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
            <div className='HomeShop-wrapper ipad'>
                <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>
                    <div className='HomeShop_card'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYyGnSwypKgePPJ0-2L0w9VXbhZcqglKE7g&usqp=CAU" alt="foto" />
                        <h2>
                            Названия
                        </h2>
                        <span>
                            Цена 
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='HomeShop_card'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYyGnSwypKgePPJ0-2L0w9VXbhZcqglKE7g&usqp=CAU" alt="foto" />
                        <h2>
                            Названия
                        </h2>
                        <span>
                            Цена 
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='HomeShop_card'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYyGnSwypKgePPJ0-2L0w9VXbhZcqglKE7g&usqp=CAU" alt="foto" />
                        <h2>
                            Названия
                        </h2>
                        <span>
                            Цена 
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='HomeShop_card'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYyGnSwypKgePPJ0-2L0w9VXbhZcqglKE7g&usqp=CAU" alt="foto" />
                        <h2>
                            Названия
                        </h2>
                        <span>
                            Цена 
                        </span>
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
            <div className='HomeShop-wrapper mobile'>
                <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>
                    <div className='HomeShop_card'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYyGnSwypKgePPJ0-2L0w9VXbhZcqglKE7g&usqp=CAU" alt="foto" />
                        <h2>
                            Названия
                        </h2>
                        <span>
                            Цена 
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='HomeShop_card'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYyGnSwypKgePPJ0-2L0w9VXbhZcqglKE7g&usqp=CAU" alt="foto" />
                        <h2>
                            Названия
                        </h2>
                        <span>
                            Цена 
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='HomeShop_card'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYyGnSwypKgePPJ0-2L0w9VXbhZcqglKE7g&usqp=CAU" alt="foto" />
                        <h2>
                            Названия
                        </h2>
                        <span>
                            Цена 
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='HomeShop_card'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYyGnSwypKgePPJ0-2L0w9VXbhZcqglKE7g&usqp=CAU" alt="foto" />
                        <h2>
                            Названия
                        </h2>
                        <span>
                            Цена 
                        </span>
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default HomeShop