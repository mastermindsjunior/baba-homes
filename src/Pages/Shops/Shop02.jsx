import React from 'react';
import PageHeader from '../../Components/common/PageHeader';
import ShopContainer02 from '../../Containers/ShopContainers/ShopContainer02';

const Shop02 = () => {
    return (
        <>
            <PageHeader activeClass01='active' activeClass02='d-none' routeName01='Shop' heading='Shop' />
            <main className="wrapper">
                <ShopContainer02 />
            </main>
        </>
    );
};

export default Shop02;