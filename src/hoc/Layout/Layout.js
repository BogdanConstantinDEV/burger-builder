import React, { useState } from 'react'

import Aux from '../Auxiliary/Auxiliary'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

const Layout = props => {
    const [stateDrawer, setStateDrawer] = useState(false)

    const toggleDrawer = () => {
        setStateDrawer(prevState => !prevState)
    }

    return (
        <Aux>
            <Toolbar toggleDrawer={toggleDrawer} />
            <SideDrawer
                closeDrawer={toggleDrawer}
                stateDrawer={stateDrawer} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout