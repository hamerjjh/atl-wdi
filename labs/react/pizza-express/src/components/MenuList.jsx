import React, {Component} from 'react'
import PizzaData from '../pizzaData.js'
import MenuItem from './MenuItem'

class MenuList extends Component {
    render() {
        const menuItem=PizzaData.map((Pizza, index) => {
            return <MenuItem 
            key={index}
            image={Pizza.image}
            name={Pizza.name} 
            price={Pizza.price} 
            description={Pizza.description}/>
        })
        
        
        return (
            <div className='menu'>
                <h1>Menu</h1>
                <div className='menu-container'>
                    {menuItem}
                    </div>
               
                </div>
        )
    }
}

export default MenuList