import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../../AuthProvider/AuthProvider';
import ShowMyToys from './ShowMyToys';
import Swal from 'sweetalert2';


const MyToys = () => {
    const { user } = useContext(AuthContex)
    const [myToys, setMyToys] = useState([])


    const url = (`https://action-figure-toys-server.vercel.app/product?sellerEmail=${user?.email}`)
    useEffect(() => {
        fetch(url)
        
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])
    
    
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                fetch(`https://action-figure-toys-server.vercel.app/products/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {

                            if (result.isConfirmed) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your toy has been deleted.',
                                    'success'
                                )
                            }
                        }
                        let remaining =  myToys.filter(toys => toys._id !== id)
                        setMyToys(remaining)
                    })
            })
    }


    const handleUpdate = id=>{

    }

    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-3 w-4/5 mx-auto'>
                {
                    myToys.map(toy => <ShowMyToys
                        key={toy._id}
                        toy={toy}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                    ></ShowMyToys>)
                }
            </div>
        </div>
    );
};

export default MyToys;