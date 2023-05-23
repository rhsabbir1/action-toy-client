import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link className='text-left font-semibold btn btn-outline' to={`/update/${_id}`}><button >Edit</button></Link>
               <button onClick={()=>handleDelete(_id)} className='text-left font-semibold btn btn-outline'>Delete</button>
            </div>
        </div>
    </div>
    );
};

export default ShowMyToys;