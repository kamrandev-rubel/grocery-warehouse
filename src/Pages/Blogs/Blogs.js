import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-4 p-4'>
                <div>
                    <h2 className='text-lg font-bold mb-5 bg-primary-color text-gray-900 p-2 rounded-sm'>Difference between Nodejs and JavaScript </h2>
                    <h3 className='underline decoration-2 font-medium mb-2'>Node Js</h3>
                    <p className='text-justify'>
                        NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                    </p>
                    <br />
                    <h3 className='underline decoration-2 font-medium mb-2'>JavaScript</h3>
                    <p className='text-justify'>
                        Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                    </p>
                </div>
                <div>
                    <h2 className='text-lg font-bold mb-5 bg-primary-color text-gray-900 p-2 rounded-sm'>When should you use nodejs and when should you use mongodb</h2>
                    <h3 className='underline decoration-2 font-medium mb-2'>When should you use nodejs </h3>
                    <p className='text-justify'>
                        Node.js development is flexible enough to work for big companies with large-scale projects, given its microservices features. It can also serve well to smaller startups, given its scalability and lower development costs. A wide range of industries successfully uses Node.js, including online entertainment, e-commerce, real estate, payment services, and online publishing.
                    </p>
                    <br />
                    <h3 className='underline decoration-2 font-medium mb-2'>when should you use mongodb</h3>
                    <p className='text-justify'>
                        MongoDB facilitate to store database in json javascript object notation  or simply when data in form of key value pair this is very fast and efficient so you should use it when you have key value pair to store json data
                    </p>
                </div>
                <div>
                    <h2 className='text-lg font-bold mb-5 bg-primary-color text-gray-900 p-2 rounded-sm'>Differences between sql and nosql databases.</h2>
                    <h3 className='underline decoration-2 font-medium mb-2'>SQL</h3>
                    <p className='text-justify'>

                        relational	use structured query language and have a predefined schema.	 are vertically scalable are table based graph or wide-column stores. are better for multi-row transactions
                    </p>
                    <br />
                    <h3 className='underline decoration-2 font-medium mb-2'>NoSQL</h3>
                    <p className='text-justify'>
                        non-relational NoSQL databases have dynamic schemas for unstructured data. are horizontally scalable. are document, key-value, are better for unstructured data like documents or JSON.
                    </p>
                </div>
                <div>
                    <h2 className='text-lg font-bold mb-5 bg-primary-color text-gray-900 p-2 rounded-sm'> What Is JWT?</h2>
                    <p className='text-justify'>
                        JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;