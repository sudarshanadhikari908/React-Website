import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../src/image/1.jpg';
import Common from './Common';



const Home = () => {

    return (<>
        <Common name='Grow your business with' imgscr={image} visit='/service' btnname='Get Started' />
    </>);

};
export default Home;