import React from 'react';
import { Link } from 'react-router-dom';

const AllToysTable = ({ toy }) => {
    const {_id,seller, toyname, sub_category, price , quantity } = toy;
    return (
        <tr>
            <th>{seller}</th>
            <th>{toyname}</th>
            <td>{sub_category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button className='btn btn-outline'><Link to={`/details/${_id}`}>View Details</Link></button></td>   
        </tr>
    );
};

export default AllToysTable;