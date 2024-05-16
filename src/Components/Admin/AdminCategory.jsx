import React, { useState, useEffect } from 'react';
import '../../Style/Admin/Category.css';
import SaidBar from './SaidBar';
import axios from '../../Service/axios';

function AdminCategory() {
    const [isCreate, setIsCreate] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [itemName, setItemName] = useState('');
    const [items, setItems] = useState([]);
    const [currentEditItem, setCurrentEditItem] = useState({ id: '', name: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const CategoryPag = 5;

    useEffect(() => {
        getAllICategory();
    }, []);

    const getAllICategory = () => {
        axios.get('/category')
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => {
                console.error('Ошибка при получении списка элементов:', error);
            });
    };

    const toggleCreateModal = () => {
        setIsCreate(!isCreate);
    };

    const toggleEditModal = (item) => {
        setCurrentEditItem(item);
        setIsEdit(!isEdit);
    };

    const createCategory = (e) => {
        e.preventDefault();

        const newItem = { name: itemName };

        axios.post('/category', newItem, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => {
                window.location.reload();
                toggleCreateModal();
            })
            .catch((error) => {
                console.error('Ошибка при создании нового элемента:', error);
            });
    };

    const editCategory = (e) => {
        e.preventDefault();

        const updatedItem = { name: currentEditItem.name };

        axios.put(`/category/${currentEditItem.id}`, updatedItem, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => {
                window.location.reload();
                toggleEditModal({ id: '', name: '' });
            })
            .catch((error) => {
                console.error('Ошибка при изменении элемента:', error);
            });
    };

    const CategoryDelete = (id) => {
        axios.delete(`/category/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => {
                console.log('Элемент успешно удален');
                getAllICategory();
            })
            .catch((error) => {
                console.error('Ошибка при удалении элемента:', error);
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

    return (
        <div className='Category'>
            <SaidBar />
            <div className='Category-content'>
                <div className='Category-header'>
                    <div className='Category-header-wrapper'>
                        <h1>Turkum</h1>
                        <button onClick={toggleCreateModal}>Turkum qo`shish</button>
                    </div>
                </div>
                <div className='Category-main'>
                    <div className='Category-table'>
                        <table>
                            <thead>
                                <tr>
                                    <td><h3>Nom</h3></td>
                                    <td><h3>Sozlama</h3></td>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item, index) => (
                                    <tr key={index}>
                                        <td><h3>{item.name}</h3></td>
                                        <td>
                                            <div>
                                                <button onClick={() => CategoryDelete(item.id)} className="delete">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
                                                    </svg>
                                                </button>
                                                <button onClick={() => toggleEditModal(item)} className="edit">
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
                <div className='Category-footer'>
                    <div className='Category-footer-wrapper'>
                        <button onClick={prevPage} disabled={currentPage === 1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l6 6m-6-6l6-6" />
                            </svg>
                        </button>
                        <div className='Category-footer-content'>
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
                        <h1>Turkum qo'shish</h1>
                        <button onClick={toggleCreateModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                                <path fill="currentColor" fillRule="evenodd"
                                    d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="create-modal-main">
                        <form onSubmit={createCategory}>
                            <div className="form-grid form-name">
                                <label htmlFor="itemName">
                                    <h3>Nom</h3>
                                    <input
                                        id='itemName'
                                        type='text'
                                        value={itemName}
                                        onChange={(e) => setItemName(e.target.value)}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="modal-footer">
                                <button className="submitBtn" type="submit">Qo'shish</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`create-modal-bg ${isEdit ? 'Create' : ''}`}>
                <div className="change-modal">
                    <div className="change-header">
                        <h1>Turkum o'zgartirish</h1>
                        <button onClick={() => toggleEditModal({ id: '', name: '' })}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                                <path fill="currentColor" fillRule="evenodd"
                                    d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="change-main">
                        <form onSubmit={editCategory}>
                            <div className="form-grid form-name">
                                <label htmlFor="editItemName">
                                    <h3>Nom</h3>
                                    <input
                                        id='editItemName'
                                        type='text'
                                        value={currentEditItem.name}
                                        onChange={(e) => setCurrentEditItem({ ...currentEditItem, name: e.target.value })}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="modal-footer">
                                <button className="submitBtn" type="submit">O'zgartirish</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminCategory;
