import React, { useState, useEffect } from 'react';
import '../../Style/Admin/AdminShop.css';
import SaidBar from './SaidBar';
import axios from '../../Service/axios';
import CONFIG from '../../stores/config';


function AdminShop() {
    const [isCreate, setIsCreate] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const [productName, setProductName] = useState('');
    const [productText, setProductText] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategory, setProductCategory] = useState(0);
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const CategoryPag = 3;
    // const [getImg, setImg] = useState(null);
    const [currentEditItem, setCurrentEditItem] = useState({
        id: '',
        name: '',
        info: '',
        price: '',
        category_id: 0,
    });

    const toggleCreateModal = () => {
        setIsCreate(!isCreate);
    };
    // const handleImgChange = (e) => {
    //     setImg(e.target.files[0]);
    //     console.log(img);
    //   };
    const toggleEditModal = (item) => {
        setCurrentEditItem(item);
        setIsEdit(!isEdit);
    };
    const createProduct = (e) => {
        e.preventDefault();

        const newProduct = {
            // image: getImg.value,
            name: productName,
            info: productText,
            price: productPrice,
            category_id: productCategory,
        };
        const formData = new FormData();
        for (let i of Object.keys(newProduct)) {
            formData.append(i, newProduct[i]);
        }
        axios.post('/menu',  formData,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => {
                window.location.reload();
                toggleCreateModal();
            })
            .catch((error) => {
                console.error('Error creating new item:', error);
            });
    };

    const getAllShopItems = () => {
        axios.get('/menu')
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => {
                console.error('Error fetching items:', error);
            });
    };

    const getAllCategories = () => {
        axios.get('/category')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    };
    const ProductDelete = (id) => {
        axios.delete(`/menu/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => {
                getAllShopItems();
            })
            .catch((error) => {
                console.error('Ошибка при удалении элемента:', error);
            });
    };

    const editProduct = (e) => {
        e.preventDefault();

        const updatedItem = {

             name: currentEditItem.name,
             info:currentEditItem.info,
             price:currentEditItem.price,
             category_id:currentEditItem.category_id,
         };

        axios.put(`/menu/${currentEditItem.id}`, updatedItem, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => {
                window.location.reload();
                setCurrentEditItem({id: '',
                name: '',
                info: '',
                price: '',
                category_id: 0,
             });
            })
            .catch((error) => {
                console.error('Ошибка при изменении элемента:', error);
            });
    };


    const indexOfLastItem = currentPage * CategoryPag;
    const indexOfFirstItem = indexOfLastItem - CategoryPag;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(items.length / CategoryPag);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    useEffect(() => {
        getAllShopItems();
        getAllCategories();
    }, []);

    return (
        <div className='AdminShop'>
            <SaidBar />
            <div className='AdminShop-content'>
                <div className='AdminShop-header'>
                    <div className='AdminShop-header-wrapper'>
                        <h1>Mahsulot</h1>
                        <button onClick={toggleCreateModal}>
                            Mahsulot qo`shish
                        </button>
                    </div>
                </div>
                <div className='AdminShop-main'>
                    <div className='AdminShop-table'>
                        <table>
                            <thead>
                                <tr>
                                    <td><h3>Rasm</h3></td>
                                    <td><h3>Nom</h3></td>
                                    <td><h3>Malumot</h3></td>
                                    <td><h3>Narx</h3></td>
                                    <td><h3>Sozlama</h3></td>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                        {/* <img src={CONFIG.API_URL + i.image} alt="foto" /> */}
                                        </td>
                                        <td><h3>{item.name}</h3></td>
                                        <td><p>{item.info}</p></td>
                                        <td><h3>{item.price}</h3></td>
                                        <td>
                                            <div>
                                                <button onClick={() => ProductDelete(item.id)} className="delete">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
                                                    </svg>
                                                </button>
                                                <button onClick={() => toggleEditModal(item)}  className="edit">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='AdminShop-footer'>
                    <div className='AdminShop-footer-wrapper'>
                        <button onClick={prevPage} disabled={currentPage === 1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l6 6m-6-6l6-6" />
                            </svg>
                        </button>
                        <div className='AdminShop-footer-content'>
                            <span>{currentPage}</span>
                            <span>/</span>
                            <span>{totalPages}</span>
                        </div>
                        <button onClick={nextPage} disabled={currentPage === totalPages}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                                <path fill="currentColor" d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`create-modal-bg ${isCreate ? 'Create' : ''}`}>
                <div className="create-modal">
                    <div className="create-modal-header">
                        <h1>Malumot qoshish</h1>
                        <button onClick={toggleCreateModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                                <path fill="currentColor" fillRule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="create-modal-main">
                        <form onSubmit={createProduct}>
                            <div className="form-grid form-name">
                                <label htmlFor="itemName">
                                    <h3>Nom</h3>
                                    <input
                                        id='itemName'
                                        type='text'
                                        value={productName}
                                        onChange={(e) => setProductName(e.target.value)}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="form-grid">
                                <label htmlFor="productPrice">
                                    <h3>Narx</h3>
                                    <input
                                        id="productPrice"
                                        type="number"
                                        value={productPrice}
                                        onChange={(e) => setProductPrice(e.target.value)}
                                        className="inp-number"
                                        required
                                    />
                                </label>
                                <div className="modal-foto">
                                    <h3>Rasm</h3>
                                    <label className="file-input-container" htmlFor="photo">
                                        <span>Rasm</span>
                                        {/* <input onChange={(e) => setImg(e.target.files[0])} accept="image/*" type="file" /> */}
                                    </label>
                                </div>
                            </div>
                            <div className="form-grid necessary">
                                <label htmlFor="productText">
                                    <h3>Malumot</h3>
                                    <textarea
                                        id="productText"
                                        className="menu-info"
                                        value={productText}
                                        onChange={(e) => setProductText(e.target.value)}
                                        cols=""
                                        rows=""
                                    />
                                </label>
                            </div>
                            <div className="modal-footer">
                                <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
                                    <option value="">Select a category</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                                <button className="submitBtn" type="submit">
                                    Qo`shish
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`create-modal-bg ${isEdit ? 'Create' : ''}`}>
                <div className="change-modal">
                    <div className="change-header">
                        <h1>Mahsulot ozgartirish</h1>
                        <button onClick={toggleEditModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                                <path fill="currentColor" fillRule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="change-main">
                        <form onSubmit={editProduct}>
                            <div className="form-grid form-name">
                                <label htmlFor="editItemName">
                                    <h3>Nom</h3>
                                    <input
                                        id="editItemName"
                                        type="text"
                                        value={currentEditItem.name}
                                        onChange={(e) => setCurrentEditItem({ ...currentEditItem, name: e.target.value })}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="form-grid">
                                <label htmlFor="editProductPrice">
                                    <h3>Narx</h3>
                                    <input
                                        id="editProductPrice"
                                        type="number"
                                        value={currentEditItem.price}
                                        onChange={(e) => setCurrentEditItem({ ...currentEditItem, price: e.target.value })}
                                        className="inp-number"
                                        required
                                    />
                                </label>
                                <div className="modal-foto">
                                    <h3>Rasm</h3>
                                    <label className="file-input-container" htmlFor="editPhoto">
                                        <span>Rasm</span>
                                        <input id="editPhoto" accept="image/*" type="file" />
                                    </label>
                                </div>
                            </div>
                            <div className="form-grid necessary">
                                <label htmlFor="editProductText">
                                    <h3>Malumot</h3>
                                    <textarea
                                        id="editProductText"
                                        className="menu-info"
                                        value={currentEditItem.info}
                                        onChange={(e) => setCurrentEditItem({ ...currentEditItem, info: e.target.value })}
                                        cols=""
                                        rows=""
                                    />
                                </label>
                            </div>
                            <div className="modal-footer">
                                <select
                                    value={currentEditItem.category_id}
                                    onChange={(e) => setCurrentEditItem({ ...currentEditItem, category_id: e.target.value })}
                                >
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                                <button className="submitBtn" type="submit">
                                    O`zgartirish
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminShop;
