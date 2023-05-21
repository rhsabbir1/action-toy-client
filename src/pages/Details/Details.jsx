import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const toy = useLoaderData()
    const { img, toyname, seller, sellerEmail, sub_category, price, rating, quantity, description } = toy;
    return (
        <div className="card w-3/5 mx-auto card-side bg-slate-500 text-zinc-50 shadow-xl">
            <div className='w-1/2'>
                <figure><img src={toy.img} alt="Movie" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{toyname}</h2>

                <p>Seller name : {seller}</p>
                <p>Seller Email : {sellerEmail}</p>
                <p>Price : ${price}</p>
                <p>Rating : {rating}</p>
                <p>Available Quantity : {quantity}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};



// picture, toy name, , , , , , and detail description
export default Details;