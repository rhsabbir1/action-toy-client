import React from 'react';

const Blog = () => {
    return (
        <div className=' mx-auto bg-slate-600 p-10 text-white'>
            <div className='my-4 bg-slate-800 p-8 w-3/4 mx-auto'>
                <h1 className='my-2'><span className='font-bold'>Access Token </span>: An access token is a credential that represents the authorization granted to a client (such as a user or an application) to access specific resources or perform certain actions on a server. It is typically a short-lived token with an expiration time. 
                </h1>
                <h1> <span className='font-bold'> Refresh Token:</span> A refresh token is a long-lived credential used to obtain a new access token without requiring the user to reauthenticate. It is typically issued alongside the access token and has a longer expiration time.</h1>
            </div>

            <div className='my-4 bg-slate-800 p-8 w-3/4 mx-auto'>
               <h1 className='mb-4'> <span className='font-bold'>SQL</span>: SQL databases are based on a relational data model. Data is organized into tables with predefined schemas, and relationships between tables are established using foreign keys. SQL databases enforce data integrity and support complex queries through the SQL language.</h1>
                <h1><span className='font-bold'>NoSQL</span>: NoSQL databases employ various data models, including key-value pairs, document-based, columnar, and graph-based models. They are schema-less, allowing flexible and dynamic data structures. NoSQL databases often focus on scalability and performance rather than enforcing strict relationships and consistency.</h1>
            </div>


            <div className='my-4 bg-slate-800 p-8 w-3/4 mx-auto'>
               <h1 className='mb-4'> Express.js provides a straightforward and unopinionated structure, allowing developers to have more control and freedom in designing their application architecture. It has a vast ecosystem of third-party middleware and extensions, making it highly extensible and customizable.</h1>
                <h1>NestJS, on the other hand, is a progressive, TypeScript-based web application framework for building efficient and scalable server-side applications. It combines elements of both object-oriented programming (OOP) and functional programming (FP) paradigms. </h1>
            </div>
            <div className='my-4 bg-slate-800 p-8 w-3/4 mx-auto'>MongoDB's aggregation framework is a powerful feature that allows you to perform advanced data processing and analysis operations on MongoDB collections. It provides a way to process and transform data within the database server itself, offering improved performance and flexibility compared to retrieving large datasets and processing them in the client application.</div>
        </div>
    );
};

export default Blog;