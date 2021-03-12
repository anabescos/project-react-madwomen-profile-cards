import React from 'react';
import {Link} from "react-router-dom";
import logo from '../images/MadWomenLogo_1v2.svg';

export default function Landing() {
    return (
        
        <main className="container">
            <img className="container__logo" src={logo} alt="logo awesome"></img>
            <h1 className="container__title">Crea tu tarjeta de visita</h1>
            <p className="container__paragraph">Crea mejores contactos profesionales de forma fácil y cómoda</p>
            <section className="container__box">
                <div className="item">
                <i className="far fa-object-ungroup item__square"></i>
                <p className="item__word">Diseña</p>
                </div>
                <div className="item">
                <i className="far fa-keyboard item__square"></i>
                <p className="item__word">Rellena</p>
                </div>
                <div className="item">
                <i className="fas fa-share-alt item__square"></i>
                <p className="item__word">Comparte</p>
                </div>
            </section>
            <Link to='/GeneratorCard'title="Comienza a crear tu tarjeta" className="container__button">
            Comenzar
        </Link>
</main>
        
        
    )
}
