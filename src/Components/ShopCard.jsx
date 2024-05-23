import React, { useEffect, useState } from 'react';
import '../Style/ShopCard.css';
import CONFIG from '../stores/config';
import { useParams } from 'react-router-dom';

function ShopCard() {
    const { productID } = useParams();
    const [pro, setPro] = useState(null);

    useEffect(() => {
        async function getProduct() {
            try {
                const fetchP = await fetch("https://market-online.onrender.com/api/menu");
                const json = await fetchP.json();
                const filteredProduct = json.find((item) => item.id === Number(productID));
                setPro(filteredProduct);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        }

        getProduct();
    }, [productID]);

    return (
        <div className='Card'>
            <div className='container'>
                <div className='Card-wrapper'>
                    <div className='Card-img'>
                        <img src={CONFIG.API_URL + pro?.image} alt={pro?.name} />
                    </div>
                    <div className='Card-content'>
                        <h1>
                            {pro?.name}
                        </h1>
                        <div className='Card-line'></div>
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
    );
}

export default ShopCard;
