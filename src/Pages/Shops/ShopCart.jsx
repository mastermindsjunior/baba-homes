import React from 'react';
import PageHeader from '../../Components/common/PageHeader';
import CartContainer from '../../Containers/ShopContainers/CartContainer';

const ShopCart = () => {
    return (
        <>
            <PageHeader activeclassName02='active' routeName01='Shop' routeName02='Cart' heading='Cart' />
            <CartContainer />
        </>
    );
};

export default ShopCart;