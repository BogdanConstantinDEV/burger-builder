import React from 'react'

import classes from './NavItems.module.css'
import NavItem from './NavItem/NavItem'

const NavItems = props => {
    const itemsClasses = [classes.NavItems]
    props.hideDynamic ? itemsClasses.push(classes.OnlyMobile) : itemsClasses.push(null)

    return <ul className={itemsClasses.join(' ')}>
        <NavItem link='/' active>Burger Builder</NavItem>
        <NavItem link='/'>Checkout</NavItem>
    </ul>
}

export default NavItems
