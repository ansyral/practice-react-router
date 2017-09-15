import { Link } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';

export const Home = () =>
    <div className="home">
        <h1>[Company Website]</h1>
        <nav>
            <Link to="about">[About]</Link>
            <Link to="events">[Events]</Link>
            <Link to="products">[Products]</Link>
            <Link to="contact">[Contact Us]</Link>
        </nav>
    </div>