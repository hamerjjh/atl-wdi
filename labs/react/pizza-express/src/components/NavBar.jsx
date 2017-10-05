import React, { Component } from 'react'

class NavBar extends Component{
    render(){
        return(
        <div className='navbar'>
            <a href='#description'>Our Story</a>
            <a href='#menu-item'>Menu</a>
            <h1> Pizza Express </h1>
            <a href='#location'>Locations</a>
            <a href='#contact'>Contact</a>
        </div>
        )
    }
}
export default NavBar