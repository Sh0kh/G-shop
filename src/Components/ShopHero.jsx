import React, { useState, useEffect } from 'react';
import '../Style/ShopHero.css';
import { NavLink } from 'react-router-dom';
import axios from '../Service/axios';
import CONFIG from '../stores/config';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ShopHero() {
    // const [itemName, setItemName] = useState('');
    const [items, setItems] = useState([]);
    // const [selectedButton, setSelectedButton] = useState(null);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    // const [error, setError] = useState(null);

    // const handleButtonClick = (buttonId) => {
    //     setSelectedButton(buttonId);
    // };

    useEffect(() => {
        getAllCategories();
        getAllShopItems();
    }, []);

    const getAllCategories = async () => {
        try {
            const response = await axios.get('/category');
            setCategories(response.data);
        } catch (error) {
            console.error('Ошибка при получении списка категорий:', error);
            // setError(error);
        }
    };

    const getAllShopItems = async () => {
        try {
            const response = await axios.get('/menu');
            setItems(response.data);
        } catch (error) {
            console.error('Ошибка при получении списка товаров:', error);
            // setError(error);
        }
    };

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    const filteredItems = selectedCategory ? items.filter(item => item.category_id === selectedCategory) : items;

    useEffect(() => {
        gsap.fromTo('.HomeShop_title', {
            y: '-100%',
            opacity: 0,
        }, {
            y: '0%',
            opacity: 1,
            scrollTrigger: {
                trigger: '.HomeShop_title',
                start: 'top 90%',
                scrub: 1
            }
        });

        gsap.fromTo('.ShopHero__nav', {
            opacity: 0,
        }, {
            opacity: 1,
            scrollTrigger: {
                trigger: '.ShopHero__nav',
                start: 'top 90%',
                scrub: 1
            }
        });
    }, []);

    return (
        <section className='ShopHero'>
            <div className='container'>
                <h1 className='HomeShop_title'>
                    Mahsulot
                </h1>
                <div className='ShopHero__nav'>
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
                <div className='ShopHero_grid'>
                    <div className='ShopHero__wrapper'>
                        {filteredItems.map((item) => (
                            <NavLink to={`/Shop/${item.id}`} key={item.id}>
                                <div className='HomeShop_card'>
                                    <img src={CONFIG.API_URL + item.image} alt={item.name} />
                                    <h2>{item.name}</h2>
                                    <span>{item.price}</span>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShopHero;
