import React from "react";
import './header.css';

export default function Header () {
  return (
    <header className="container header-container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="/">Главная</a>
            <div className="collapase navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Главная</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/catalog.html">Каталог</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about.html">О магазине</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contacts.html">Контакты</a>
                </li>
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                  <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                  <input className="form-control" placeholder="Поиск"/>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}