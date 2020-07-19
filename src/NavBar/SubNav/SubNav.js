import React from 'react';
import  SubNavItem  from './SubNavItem/SubNavItem';
import styles from './SubNav.module.css'

export default function SubNav() {
    return (
        <div className={styles["sub-nav"]}>
            <SubNavItem label='Conciliaciones' icon='fa-user'/>
            <SubNavItem label='Fuentes' icon='fa-user'/>
            <SubNavItem label='Tableros' icon='fa-table'/>
            <SubNavItem label='Usuarios' icon='fa-user' showRightBorder/>
        </div>
    )
}
