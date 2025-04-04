import React from 'react';
import ProductDetails from './ProductDetails';
import ProductView from './ProductView';
import RelatedProducts from './RelatedProducts';


const ShopContainer04 = () => {

    return (
        <main className="wrapper">
            <ProductView />
            <ProductDetails />
            <RelatedProducts />
        </main >
    );
};

export default ShopContainer04;