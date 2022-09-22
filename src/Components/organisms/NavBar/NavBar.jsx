import React, { useState } from 'react'
import './navBar.css'                                                                                                                                                                                                

export default function NavBar() {
    let [Toggle, showMenu] = useState(false)
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">{'<Au.dev/>'}</a>
            <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
                <ul className="nav__list grid">

                    <li className="nav__item">
                        <a href="" className="nav__link active-link">
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i> Projects
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="" className="nav__link">
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close" onClick={()=>showMenu(!Toggle)}></i>
            </div>
            <div className='nav__toggle' onClick={()=>showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}
