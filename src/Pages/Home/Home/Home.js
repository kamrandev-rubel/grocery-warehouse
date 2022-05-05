import React from 'react';
import Achieved from '../Achieved/Achieved';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Trademark from '../Trademark/Trademark';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <Trademark />
            <Achieved />
        </div>
    );
};

export default Home;