import React from 'react';
import ShopFilter from './ShopFilter';
import TabContent from './TabContent';

const ShopContainer03 = () => {
    return (
        <section className="shop_page bg-dark-200">
            <div className="container">
                <ShopFilter />
                <TabContent />
            </div>
        </section>
    );
};

export default ShopContainer03;