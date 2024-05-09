import React from 'react'
import '../Style/Contact.css'
function Contact() {
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
            <form action="">
              <label htmlFor="name">
                <h3>
                  Ismingiz
                </h3>
                <input type="text" id='name'/>
              </label>
              <label htmlFor="tel">
                <h3>
                  Telefon raqamingiz
                </h3>
                <input type='number' id='tel' placeholder='+998'/>
              </label>
              <label htmlFor="">
                <h3>
                  Izohingiz
                </h3>
                <textarea name="" id="" cols="30" rows="10">

                </textarea>
                <button>
                  Jonatish
                </button>
              </label>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact