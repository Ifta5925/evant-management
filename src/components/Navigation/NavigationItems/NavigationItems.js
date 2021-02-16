import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/about">about</NavigationItem>
        <NavigationItem link="/ourWork">Our Work</NavigationItem>
        <NavigationItem link="/ourTeam">Our Team</NavigationItem>
        <NavigationItem link="/gellary">Gellary</NavigationItem>
        <NavigationItem link="/package">Package</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
        <NavigationItem link="/socialWork">Social Work</NavigationItem>

    </ul>
);

export default navigationItems;