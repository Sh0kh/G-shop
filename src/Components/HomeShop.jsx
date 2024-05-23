import React from 'react'
import '../Style/HomeShop.css'
import '../Style/Media.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from '../Service/axios';
import CONFIG from '../stores/config';
import  { useState, useEffect } from 'react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger,);
function HomeShop() {
    // const [itemName, setItemName] = useState('');
    const [items, setItems] = useState([]);
    // const [selectedButton, setSelectedButton] = useState(null);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    // const [error, setError] = useState(null);
    // const handleButtonClick = (buttonId) => {
    //   setSelectedButton(buttonId);
    // };
    useEffect(() => {
        getAllCategories();
        getAllShopItems();
    }, []);

    const getAllCategories = () => {
        axios.get('/category')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error('Ошибка при получении списка категорий:', error);
                // setError(error); 
            });
    };

    const getAllShopItems = () => {
        axios.get('/menu')
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => {
                console.error('Ошибка при получении списка товаров:', error);
                // setError(error);
            });
    };
    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    const filteredItems = selectedCategory ? items.filter(item => item.category_id === selectedCategory) : items;
    useGSAP(()=>{
        gsap.fromTo('.HomeShop_title',
      {
        y:'-100%',
        opacity:0,
      },
      {
        y:'0%',
        opacity:1,
        scrollTrigger:{
          trigger:'.HomeShop_title',
          start:'top 90%',
          scrub:1
        }
      }
    )
        gsap.fromTo('.HomeShop__nav',
      {
        opacity:0,
      },
      {
        opacity:1,
        scrollTrigger:{
          trigger:'.HomeShop__nav',
          start:'top 90%',
          scrub:1
        }
      }
    )
    })
  return (
    <section className='HomeShop'>
        <div className='container'>
            <h1 className='HomeShop_title'>
                Mahsulot
            </h1>
            <div className='HomeShop__nav'>
            {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryClick(category.id)}
                            className={selectedCategory === category.id ? 'selected' : ''}
                        >
                            {category.name}
                        </button>
                    ))}
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
                     {filteredItems.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className='HomeShop_card'>
                                    <img src={CONFIG.API_URL + item.image} alt="foto" />
                                    <h2>{item.name}</h2>
                                    <span>{item.price}</span>
                                </div>
                            </SwiperSlide>
                        ))}
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
                {filteredItems.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className='HomeShop_card'>
                                    <img src={CONFIG.API_URL + item.image} alt="foto" />
                                    <h2>{item.name}</h2>
                                    <span>{item.price}</span>
                                </div>
                            </SwiperSlide>
                        ))}
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
                {filteredItems.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className='HomeShop_card'>
                                    <img src={CONFIG.API_URL + item.image} alt="foto" />
                                    <h2>{item.name}</h2>
                                    <span>{item.price}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default HomeShop