import React from 'react'
import classes from './Logo.module.css'
import LogoImg from '../../../assets/burger-logo.png'

const Logo = () => {
    return <div className={classes.Logo}>
        <img src={LogoImg} alt='Logo' />
    </div>
}

export default Logo
