import React, {Component} from 'react'
import LocationData from '../locationData.js'
import Locations from './Locations.jsx'

class LocationList extends Component {
    render() {
        const locationlist = LocationData.map((location, index) => {
            return <Locations
            key={index}
            name={location.name} 
            address={location.address}
            phone={location.phone}
           />
        })
        return(
            <div className='locations'>
                <h1>Locations:</h1>
                <div className='locations'>
                    {locationlist}
                    </div>
               
                </div>
        )
    }
}

export default LocationList