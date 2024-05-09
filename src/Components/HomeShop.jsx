import React from 'react'
import '../Style/HomeShop.css'
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
                <button
                onClick={() => handleButtonClick(2)}
                className={selectedButton === 2 ? 'selected' : ''}
                >
                    Aksesuar
                </button>
                <button
                onClick={() => handleButtonClick(3)}
                className={selectedButton === 3 ? 'selected' : ''}
                >
                    Dars
                </button>
            </div>
            <div className='HomeShop-wrapper'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default HomeShop