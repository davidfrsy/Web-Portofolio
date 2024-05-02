import React from 'react'
import './Header.css'
import foto_profil from '../../Assets/Profile.jpg'
import foto_html from '../../Assets/HTML.png'
import foto_css from '../../Assets/CSS.png'
import foto_javascript from '../../Assets/Java.png'
import foto_react from '../../Assets/React.png'
import foto_vitejs from '../../Assets/Vite.png'

const Header = () => {
  return (
    <div className='header' id='home'>
        <div className='navbar'>
            <ul>
                <a href="#"><li>Home</li> </a>
                <a href="#about"><li>About</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </div>
        <div className='row-1'>
            <div className='intro'>
                
                <h2>Muhammad</h2>
                <h2>David Firmansyah</h2>
                <p>
                    I am an undergraduate student of 
                    Informatics Engineering Study Program 
                    of Dian Nuswantoro University, I have an 
                    ambition to improve my knowledge and 
                    skills in Web Development.
                </p>

                <div className='btn-start'>
                    <a href="#about">
                        <button>
                            Let's get started&nbsp;&nbsp;<i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </a>
                </div>

            </div>

            <div className='profile'>
                <img src={foto_profil} alt="Profile" className='foto-profil'/>
            </div>

        </div>

        <div className='interest'>
            <ul>
                <li><img src={foto_html} alt="HTML5" /></li>
                <li><img src={foto_css} alt="CSS3" /></li>
                <li><img src={foto_javascript} alt="JavaScript" /></li>
                <li><img src={foto_react} alt="React" /></li>
                <li><img src={foto_vitejs} alt="ViteJs" /></li>
            </ul>
        </div>
    </div>
  )
}

export default Header
