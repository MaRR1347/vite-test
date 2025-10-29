import { useState, React } from 'react'
import './register.scss'

import SpinningLogo from '../components/spinning-logo.jsx'
import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

export default function Register() {


  const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("slide-in-from-below", entry.isIntersecting);
    });
  };

  const observer = new IntersectionObserver(startAnimation);
  const options = { root: null, rootMargin: '0px', threshold: 1 };

  const elements = document.querySelectorAll('.slideable');
  elements.forEach(el => {
    observer.observe(el, options);
  });

  return (
    <div>
      <Navbar />
      <main>
        <header>
          <p>Rejestracja</p>
          
        </header>

        <aside>
          <p>Rejestracji ciąg dalszy</p>  
        </aside>        
      </main>

      <Footer />
    </div>
  )
}
