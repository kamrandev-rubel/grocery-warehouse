import React from 'react';
import Achieved from '../Achieved/Achieved';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import Trademark from '../Trademark/Trademark';

const Home = () => {
    return (
        <div>
            <Banner />
            <Inventory />
            <Trademark />
            <Achieved />
        </div>
    );
};

export default Home;