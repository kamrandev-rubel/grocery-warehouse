import React from 'react';
import { Helmet } from 'react-helmet-async';
import Achieved from '../Achieved/Achieved';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import Trademark from '../Trademark/Trademark';

const Home = () => {
    return (
        <div>
            <Helmet title='Home' />
            <div>
                <Banner />
                <Inventory />
                <Trademark />
                <Achieved />
            </div>
        </div>
    );
};

export default Home;