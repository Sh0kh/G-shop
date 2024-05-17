import React from 'react'
import '../../Style/Admin/AdminHome.css'
import SaidBar from './SaidBar'
import { NavLink } from 'react-router-dom'
import axios from '../../Service/axios'
import { useEffect, useState } from 'react'


function AdminHome() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [numberOfElements, setNumberOfElements] = useState({
    ShopElement: 0,
    Category: 0,
    Message: 0,
  });
  const getAllShopItems = () => {
    axios.get('/menu',
    {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('tokenn')}`,
      },
  }
    )
        .then((response) => {
          numberOfElements.ShopElement = response.data.length
        })
        .catch((error) => {
            console.error('Error fetching items:', error);
        });
};
const getAllCategories = () => {
  axios.get('/category',
  {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('tokenn')}`,
    },
}
  )
      .then((response) => {
        numberOfElements.Category = response.data.length
      })
      .catch((error) => {
          console.error('Error fetching categories:', error);
      });
};
    
const getAllMessages = () => {
  axios.get('/contact/find-all',
      {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('tokenn')}`,
          },
      }
  )
      .then((response) => {
        numberOfElements.Message = response.data.length
      })
      .catch((error) => {
          console.error('Error fetching items:', error);
      });
};
useEffect(() => {
  getAllMessages();
  getAllCategories();
  getAllShopItems();
}, []);
  return (
    <div className='Dashboard'>
        <SaidBar/>
        <div className='Dashboard-content'>
          <div className='Dashboard-content-header'>
              <h1>
                  Bosh panel
              </h1>
          </div>
          <div className='Dashboard-main'> 
              <div className='Dashboard-main-wrapper'>
                  <div className='Dashboard-card'>
                      <div className='Dashboard-card-grid'>
                          <h3>
                              Mahsulot
                          </h3>
                          <span>
                            {numberOfElements.ShopElement}
                          </span>
                      </div>
                      <NavLink to ="/AdminShop">
                      O`tish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                    </NavLink>
                  </div>
                  <div className='Dashboard-card'>
                      <div className='Dashboard-card-grid'>
                          <h3>
                              Turkum
                          </h3>
                          <span>
                          {numberOfElements.Category}
                          </span>
                      </div>
                      <NavLink to ="/AdminShop">
                      O`tish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                    </NavLink>
                  </div>
                  <div className='Dashboard-card'>
                      <div className='Dashboard-card-grid'>
                          <h3>
                              Habar
                          </h3>
                          <span>
                          {numberOfElements.Message}
                          </span>
                      </div>
                      <NavLink to ="/AdminShop">
                      O`tish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                    </NavLink>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default AdminHome