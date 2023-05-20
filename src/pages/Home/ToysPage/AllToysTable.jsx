import React from 'react';

const AllToysTable = ({ toy }) => {
    const {seller, toyname, sub_category, price , quantity } = toy;
    return (
        <tr>
            <th>{seller}</th>
            <th>{toyname}</th>
            <td>{sub_category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button className='btn btn-outline'>View Details</button></td>   
        </tr>
    );
};

export default AllToysTable;