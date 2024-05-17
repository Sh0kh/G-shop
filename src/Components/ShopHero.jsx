import React from 'react'
import '../Style/ShopHero.css'
import { NavLink } from 'react-router-dom'
import  { useState, useEffect } from 'react';
import axios from '../Service/axios';
import CONFIG from '../stores/config';

function ShopHero() {
     // const [itemName, setItemName] = useState('');
     const [items, setItems] = useState([]);
     const [selectedButton, setSelectedButton] = useState(null);
     const [categories, setCategories] = useState([]);
     const [selectedCategory, setSelectedCategory] = useState(null);
     const [error, setError] = useState(null);
     const handleButtonClick = (buttonId) => {
       setSelectedButton(buttonId);
     };
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
                 setError(error); // Устанавливаем ошибку в состояние
             });
     };
 
     const getAllShopItems = () => {
         axios.get('/menu')
             .then((response) => {
                 setItems(response.data);
             })
             .catch((error) => {
                 console.error('Ошибка при получении списка товаров:', error);
                 setError(error); // Устанавливаем ошибку в состояние
             });
     };
     const handleCategoryClick = (categoryId) => {
         setSelectedCategory(categoryId);
     };
 
     const filteredItems = selectedCategory ? items.filter(item => item.category_id === selectedCategory) : items;
 
  return (
    <section className='ShopHero'>
        <div className='container'>
            <h1 >
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
                            <NavLink to ={`/Shop/${item.id}`} key={item.id}>
                                <div className='HomeShop_card'>
                                    <img src={CONFIG.API_URL + item.image} alt="foto" />
                                    <h2>{item.name}</h2>
                                    <span>{item.price}</span>
                                </div>
                            </NavLink>
                    ))}
            </div>
            </div>
        </div>
    </section>
  )
}

export default ShopHero