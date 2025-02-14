import React from 'react';

import {guestData} from '../utils/guestData.js';
import '../App.css';
import GuestCart from './GuestCart.js';
import Corousal from './Corousal.js';
export default function Body()
{
    const[Data,setData] = React.useState(guestData);

    return(
        <div className="main-body-div">
        <div>
            {/* <img className="main-body-img" src="./bg-4.jpg" /> */}
            <Corousal />
        </div>
        <div className="guest-div">
            {
                Data.map((value)=>{
                    return <GuestCart name={value.name}
                                      designation={value.designation}
                                      img = {value.img}
                                      key={value.id} />
                })
            }
        </div>
        </div>
    );
}