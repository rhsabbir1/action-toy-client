import React from 'react';

const ToyCart = ({ toy }) => {
    const { _id, img, name, Price, rating } = toy;
    console.log(toy)
    return (
        <div className='m-6'>
            <div className="card  glass">
                <figure><img src={img} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-left font-semibold'>Price : $ {Price}</p>
                    <p className='text-left font-semibold'>Rating :{rating}</p>
                   <button className='text-left font-semibold btn btn-outline'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCart;