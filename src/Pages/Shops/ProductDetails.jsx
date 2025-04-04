import React from 'react';
import PageHeader from '../../Components/common/PageHeader';
import ShopContainer04 from '../../Containers/ShopContainers/ShopContainer04';


const ProductDetails = () => {
    return (
        <>
            <PageHeader activeclassName02='active' routeName01='Shop' routeName02='Product' heading='Product Details' />

            <ShopContainer04 />
        </>
    );
};

export default ProductDetails;