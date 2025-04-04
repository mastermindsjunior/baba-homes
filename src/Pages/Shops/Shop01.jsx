import React from 'react';
import PageHeader from '../../Components/common/PageHeader';
import ShopContainer01 from '../../Containers/ShopContainers/ShopContainer01';

const Shop01 = () => {
    return (
        <div className="main_wrapper">
            <PageHeader activeClass01='active' activeClass02='d-none' routeName01='Shop' heading='Shop' />
            <ShopContainer01 />
        </div>
    );
};

export default Shop01;