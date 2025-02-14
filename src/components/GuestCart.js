import React from 'react';

function GuestCart(props)
{
    const {name,designation,img} = props;
    return(
        <div className="guest-cart-div">
            <div className="guest-img-div">
                <img className="guest-img" src={img} />
            </div>
            <div className="guest-details-div">
                <h2>{name}</h2>
                <p>{designation}</p>
            </div>
        </div>
    );
}

export default GuestCart;