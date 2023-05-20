import React from 'react';

const ShowMyToys = ({toy, handleDelete} ) => {
    const { _id, img, name, price, rating } = toy;
    return (
        <div className='m-6'>
        <div className="card  glass">
            <figure><img src={img} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-left font-semibold'>Price : $ {price}</p>
                <p className='text-left font-semibold'>Rating :{rating}</p>
               <button className='text-left font-semibold btn btn-outline'>Edit</button>
               <button onClick={()=>handleDelete(_id)} className='text-left font-semibold btn btn-outline'>Delete</button>
            </div>
        </div>
    </div>
    );
};

export default ShowMyToys;