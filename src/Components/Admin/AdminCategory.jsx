import React from 'react'
import '../../Style/Admin/Category.css'
import SaidBar from './SaidBar'
import { useState } from 'react'


function AdminCategory() {
    const [isCreate, setIsCreate] = useState(false);

    const toggleClass = () => {
        setIsCreate(!isCreate);
    };
    const [isEdit, setIsEdit] = useState(false);

    const toggleClass2 = () => {
        setIsEdit(!isEdit);
    };
  return (
    <div className='Category'>
    <SaidBar/>
    <div className='Category-content'>
        <div className='Category-header'>
           <div className='Category-header-wrapper'>
           <h1>
                Turkum
            </h1>
            <button onClick={toggleClass}>
                Turkum qo`shish
            </button>
           </div>
        </div>
        <div className='Category-main'>
            <div className='Category-table'>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <h3>
                                    Nom
                                </h3>
                            </td>
                            <td>
                                <h3>
                                    Sozlama
                                </h3>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h3>
                                    Futbolka
                                </h3>
                            </td>
                            <td>
                               <div>
                                <button class="delete">
                                <svg  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                        viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
                                    </svg>
                                </button>
                                <button onClick={toggleClass2} class="edit">
                                <svg  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                        viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z" />
                                    </svg>
                                </button>
                               </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='Category-footer'>
                    <div className='Category-footer-wrapper'> 
                        <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="M5 12h14M5 12l6 6m-6-6l6-6" />
                        </svg>
                        </button>
                        <div className='Category-footer-content'>
                            <span>
                                1
                            </span>
                            <span>
                                /
                            </span>
                            <span>
                                2
                            </span>
                        </div>
                        <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                        <path fill="currentColor"
                            d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06" />
                    </svg>
                        </button>
                    </div>
                </div>
    </div>
    <div className={`create-modal-bg ${isCreate ? 'Create' : ''}`}>
        <div class="create-modal">
            <div class="create-modal-header">
                <h1>
                    Turkum qoshish
                </h1>
                <button onClick={toggleClass}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                        <path fill="currentColor" fill-rule="evenodd"
                            d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div class="create-modal-main">
                <form>
                    <div class="form-grid form-name">
                        <label for="fioru">
                            <h3>
                                Nom
                            </h3>
                            {/* <input  required id="fioru" type="text"> */}
                            <input required id='fioru' type="text" />
                        </label>
                    </div>
                    <div class="modal-footer">
                        <button class="submitBtn" type="submit">
                            Qo`shish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div className={`create-modal-bg ${isEdit ? 'Create' : ''}`}>
        <div class="change-modal">
            <div class="change-header">
                <h1>
                    Turkum ozgartirish
                </h1>
                <button onClick={toggleClass2}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                        <path fill="currentColor" fill-rule="evenodd"
                            d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div class="change-main">
            <form>
                    <div class="form-grid form-name">
                        <label for="fioru">
                            <h3>
                                Nom
                            </h3>
                            {/* <input  required id="fioru" type="text"> */}
                            <input required id='fioru' type="text" />
                        </label>
                    </div>                 
                    <div class="modal-footer">
                        <button class="submitBtn" type="submit">
                            O`zgartirish
                        </button>
                    </div>
                </form>
            </div>
        </div>
</div>
</div>
  )
}

export default AdminCategory