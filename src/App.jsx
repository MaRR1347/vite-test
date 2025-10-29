import { useState, React } from 'react'
import ReactDOM from 'react-dom/client';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

import SpinningLogo from './components/spinning-logo.jsx'
import Nav from './components/nav.jsx'
import Footer from './components/footer.jsx'

function App() {


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
      <Nav />
      <main>
        <header>
          <p className='slideable'>De</p>
          <div className="logo">
            <SpinningLogo />
          </div>
        </header>

        <aside>
          <p>Jakieś teksty że rozwija to coś tam coś tam Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ducimus! Aliquam, voluptatum alias? Asperiores consectetur deleniti quibusdam iusto et ea! Fugit placeat illum natus numquam cupiditate voluptatibus porro! Tempora, unde.</p>  
        </aside>        
      </main>

      <Footer />
    </div>
  )
}

export default App
