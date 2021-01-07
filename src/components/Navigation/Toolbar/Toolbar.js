import React from 'react'
import classes from './Toolbar.module.css'

import NavItems from '../NavItems/NavItems'
import Logo from '../../UI/Logo/Logo'
import ToggleDrawer from '../SideDrawer/ToggleDrawer/ToggleDrawer'

const Toolbar = props => {
    return <header className={classes.Toolbar}>
        <ToggleDrawer toggleDrawer={props.toggleDrawer} />
        <Logo />
        <NavItems hideDynamic />
    </header>
}

export default Toolbar
