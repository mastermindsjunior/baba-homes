import React from 'react';
import PageHeader from '../../Components/common/PageHeader';
import ShopContainer03 from '../../Containers/ShopContainers/ShopContainer03';

const Shop03 = () => {
    return (
        <div className="main_wrapper">
            <PageHeader activeClass01='active' activeClass02='d-none' routeName01='Shop' heading='Shop' />
            <ShopContainer03 />
        </div>
    );
};

export default Shop03;