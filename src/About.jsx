import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../src/image/1.jpg';
import Common from './Common';



const About = () => {

    return (<>
        <Common name='Welcome To About Page' imgscr={image} visit='/contact' btnname='Contact Now' />

    </>);

};
export default About;