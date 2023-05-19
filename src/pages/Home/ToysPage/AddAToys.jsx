import React from 'react';

const AddAToys = () => {
    return (
        <div className=' bg-slate-500 py-4'>
            <h1 className='text-5xl text-center font-bold text-white'> Add Toys</h1>

            <form className='ml-40'>
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
                            <input type="text" name='seller' placeholder="Seller name" className="input input-bordered" />

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
                            <input type="text" name='email' placeholder='Seller Email' className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className=" text-white font-semibold">Sub Category</span>
                            </label>
                            <input type="text" name='sub-category'  className="input input-bordered" placeholder='Sub Category'/>
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