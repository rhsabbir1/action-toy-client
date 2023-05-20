import React, { useContext } from 'react';
import { AuthContex } from './../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';




const AddAToys = () => {

    const {user} = useContext(AuthContex)

    const handleAddToy = event =>{
        event.preventDefault()
        const form = event.target;


        const toyname = form.toyName.value;
        const pictureURL = form.pictureURL.value;
        const sub_category = form.sub_category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const addtoy = {
            toyname,
            seller : user?.displayName,
            img: pictureURL,
            sellerEmail : user?.email,
            sub_category,
            price,
            rating,
            quantity,
            description
        }

        fetch('http://localhost:5000/products',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addtoy)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
                Swal.fire({
                    title: 'Success!',
                    text: 'New Toy add successful',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
        
    }

    return (
        <div className=' bg-slate-500 py-4'>
            <h1 className='text-5xl text-center font-bold text-white'> Add Toys</h1>

            <form onSubmit={handleAddToy} className='ml-40'>
            <div className="card-body w-10/12 mx-auto">
                    <div className='grid md:grid-cols-2 gap-4'>

                        <div className="form-control">
                            <label className="label">
                                <span className=" text-white font-semibold">Toy Name</span>
                            </label>
                            <input type="text" name='toyName' placeholder="Toy Name" className="input input-bordered" />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className=" text-white font-semibold">Seller name</span>
                            </label>
                            <input type="text" name='seller' defaultValue={user.displayName} placeholder="Seller name" className="input input-bordered" />

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className=" text-white font-semibold">Picture URL</span>
                            </label>
                            <input type="text" name='pictureURL' placeholder="Seller name" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-white font-semibold">Seller email</span>
                            </label>
                            <input type="text" name='email'  defaultValue={user?.email} placeholder='Seller Email' className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className=" text-white font-semibold">Sub Category</span>
                            </label>
                            <input type="text" name='sub_category'  className="input input-bordered" placeholder='Sub Category'/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className=" text-white font-semibold">Price</span>
                            </label>
                            <input type="text" name='price'  className="input input-bordered" placeholder='Price'/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className=" text-white font-semibold">Rating</span>
                            </label>
                            <input type="text" name='rating'  className="input input-bordered" placeholder='Rating'/>
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
                        <input className="btn btn-error text-white" type="submit" value="Add Toy" />
                    </div>
                </div>
            </form>


        </div>
    );
};

export default AddAToys;