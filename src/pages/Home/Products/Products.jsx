import React from 'react';
import img from '../../../assets/products.avif'

const Products = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="w-40 md:w-96 rounded-lg shadow-2xl" />
                <div className='ml-16'>
                    <h1 className="text-5xl font-bold">Our More <br /> Products...</h1>
                    <p className="py-2 text-xl link link-neutral">Baby Doll</p>
                    <p className="py-2 text-xl link link-neutral">Toy Dolls</p>
                    <p className="py-2 text-xl link link-neutral">Art and Crafts kit</p>
                    <p className="py-2 text-xl link link-neutral">Kids Guitars</p>
                    <button className="btn btn-primary">Show All Products</button>
                </div>
            </div>
        </div>
    );
};

export default Products;