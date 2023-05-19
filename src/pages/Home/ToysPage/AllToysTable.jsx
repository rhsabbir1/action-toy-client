import React from 'react';

const AllToysTable = ({ toy }) => {
    const {saller, name, sub_category, Price , quantity } = toy;
    return (
        <tr>
            <th>{saller}</th>
            <th>{name}</th>
            <td>{sub_category}</td>
            <td>{Price}</td>
            <td>{quantity}</td>
            <td><button className='btn btn-outline'>View Details </button></td>
            
        </tr>
    );
};

export default AllToysTable;