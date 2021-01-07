import React from 'react'
import classes from './SideDrawer.module.css'
import Logo from '../../UI/Logo/Logo'
import NavItems from '../NavItems/NavItems'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = props => {
    const drawerClasses = [classes.SideDrawer, props.stateDrawer ? classes.Open : classes.Closed]

    return <Aux>
        {props.stateDrawer ? <Backdrop click={props.closeDrawer} /> : null}

        <nav className={drawerClasses.join(' ')}>
            <div style={{ height: '70px' }}><Logo /></div>
            <NavItems />
        </nav>
    </Aux>

}

export default SideDrawer
