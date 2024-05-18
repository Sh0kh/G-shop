import React from 'react'
import '../Style/Contact.css'
import { useState } from 'react';
import axios from '../Service/axios';

import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger,);
function Contact() {
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const createContact = (e) => {
    e.preventDefault();

    const newContact = {
      name: contactName,
      phone: contactPhone,
      info: contactInfo,
    };

    axios.post('/contact/create', newContact, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      setContactName('');
      setContactPhone('');
      setContactInfo('');
    })
    .catch((error) => {
      console.error('Error creating contact:', error);
    });

  };
  useGSAP(()=>{
    gsap.fromTo('.Form1',
    {
      y:'-100%',
      opacity:0,
    },
    {
      y:'0%',
      opacity:1,
      
    }
  )
    gsap.fromTo('.contact-content',
    {
      y:'-100%',
      opacity:0,
    },
    {
      y:'0%',
      opacity:1,
    }
  )
  })
  return (
    <section className='contact'>
      <div className='container'>
        <h2>
          Izoh qoldiring
        </h2>
        <div className='contact-wrapper'>
            <div className='contact-content'>
               <h1>
                  O`z fikiringizdi bildiring!
               </h1>
               <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime, soluta eligendi obcaecati minima excepturi aperiam tenetur? Ab, vero libero.
               </p>
            </div>
            <form onSubmit={createContact} className='Form1' action="">
            <label htmlFor="name">
              <h3>Ismingiz</h3>
              <input value={contactName} onChange={(e) => setContactName(e.target.value)} type="text" id='name'/>
            </label>
            <label htmlFor="tel">
              <h3>Telefon raqamingiz</h3>
              <input value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} type='number' id='tel' placeholder='+998'/>
            </label>
            <label htmlFor="">
              <h3>Izohingiz</h3>
              <textarea value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
              <button type='submit'>Jonatish</button>
            </label>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact