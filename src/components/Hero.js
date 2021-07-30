import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>Wisdom Books</h2>
            <h3>Una habitación sin libros es como un <br />cuerpo sin alma</h3>
            <Link className="btn" to="/books">Ver todos los libros</Link>
        </section>
    )
}

export default Hero
