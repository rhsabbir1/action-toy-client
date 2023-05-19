import React, { useEffect, useState } from 'react';
import AllToysTable from './AllToysTable';

const AllToys = () => {

    const [allToys, setAllToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])

    return (
        <div className=' bg-slate-200 py-4'>
            <h1 className='text-5xl text-center '>All Action Figure Toys</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-5/6 m-8 mx-auto">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {
                           allToys.slice(0 ,20).map(toy =><AllToysTable
                           key={toy._id}
                           toy={toy}
                           ></AllToysTable>) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;