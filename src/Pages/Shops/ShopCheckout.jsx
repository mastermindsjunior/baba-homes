import React from 'react';
import PageHeader from '../../Components/common/PageHeader';
import Checkout from '../../Containers/ShopContainers/Checkout';

const ShopCheckout = () => {
    return (
        <>
            <PageHeader activeClass02='active' routeName01='Shop' routeName02='Checkout' heading='Checkout' />

            <Checkout />
        </>
    );
};

export default ShopCheckout;