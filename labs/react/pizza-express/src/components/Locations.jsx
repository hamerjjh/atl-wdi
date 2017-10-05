import React, {Component} from 'react'

class Locations extends Component {
    render() {
        return(
            <div className='location' id='location'>
                <p>{this.props.name}</p>
                <strong>address</strong><p>{this.props.address}</p>
                <strong>phone</strong><p>{this.props.phone}</p>
                </div>
            
        )
    }
}

export default Locations