import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ToyUpdate = () => {

    const toy = useLoaderData()
   

    const handleUpdatedToy = event =>{
        event.preventDefault()
        const form = event.target;

        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const update = {
            price,    
            quantity,
            description
        } 
        fetch(`http://localhost:5000/update/${toy._id}`,{
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        }) 
        .then(res=> res.json())
        .then(data =>{
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffe Update successfull',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            }
        }) 
    }

    return (
        <div className=' bg-slate-500 py-4'>
        <h1 className='text-5xl text-center font-bold text-white'> Update Toys</h1>

        <form onSubmit={handleUpdatedToy} className='ml-40'>
        <div className="card-body w-10/12 mx-auto">
                <div className='grid md:grid-cols-2 gap-4'>

                    <div className="form-control">
                        <label className="label">
                            <span className=" text-white font-semibold">Price</span>
                        </label>
                        <input type="text" name='price'  className="input input-bordered" placeholder='Price'/>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className=" text-white font-semibold">Available quantity</span>
                        </label>
                        <input type="text" name='quantity'  className="input input-bordered" placeholder='Available quantity'/>
                    </div>

                </div>
                <span className=" text-white font-semibold">Detail Description</span>
                <textarea className="textarea" name='description' placeholder="Description......" ></textarea>

                <div className="form-control mt-6">
                    <input className="btn btn-error text-white" type="submit" value="Update" />
                </div>
            </div>
        </form>
    </div>
    );
};

export default ToyUpdate;