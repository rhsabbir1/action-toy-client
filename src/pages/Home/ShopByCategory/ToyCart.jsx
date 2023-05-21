import React from 'react';
import { Link } from 'react-router-dom';

const ToyCart = ({ toy }) => {
    const { _id, img, toyname, price, rating } = toy;
    console.log(toy)
    return (
        <div className='m-6'>
            <div className="card  glass">
                <figure><img src={img} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyname}</h2>
                    <p className='text-left font-semibold'>Price : $ {price}</p>
                    <p className='text-left font-semibold'>Rating :{rating}</p>
                   <button className='text-left font-semibold btn btn-outline'><Link to={`/details/${_id}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ToyCart;