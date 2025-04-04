import React from 'react';
import ListProductItem from '../../Components/ShopElements/ListProductItem';
import PaginationDiv02 from '../../Components/ShopElements/PaginationDiv02';
import ProductItem from '../../Components/ShopElements/ProductItem';

const TabContent = () => {
    const ProductData = [
        {
            id: '1',
            primaryImg: 'images/shop/products/1-1.jpg',
            secondaryImg: 'images/shop/products/1-2.jpg',
            newClass: 'badge-new',
            oldClass: 'd-none',
            badge: 'New',
            name: 'Safety Cones',
            price: '$15.00',
            oldPrice: '$19.00',
            category: 'Construction',
        },
        {
            id: '2',
            primaryImg: 'images/shop/products/2-1.jpg',
            secondaryImg: 'images/shop/products/2-2.jpg',
            newClass: 'badge-sale',
            oldClass: 'old_price',
            badge: 'Sale',
            name: 'Yellow Helmet',
            price: '$15.00',
            oldPrice: '$19.00',
            category: 'Construction',
        },
        {
            id: '3',
            primaryImg: 'images/shop/products/1-1.jpg',
            secondaryImg: 'images/shop/products/1-2.jpg',
            newClass: 'badge-new',
            oldClass: 'd-none',
            badge: 'New',
            name: 'Safety Cones',
            price: '$15.00',
            oldPrice: '$19.00',
            category: 'Construction',
        },
        {
            id: '4',
            primaryImg: 'images/shop/products/2-1.jpg',
            secondaryImg: 'images/shop/products/2-2.jpg',
            newClass: 'badge-sale',
            oldClass: 'old_price',
            badge: 'Sale',
            name: 'Yellow Helmet',
            price: '$15.00',
            oldPrice: '$19.00',
            category: 'Construction',
        },
        {
            id: '5',
            primaryImg: 'images/shop/products/1-1.jpg',
            secondaryImg: 'images/shop/products/1-2.jpg',
            newClass: 'badge-new',
            oldClass: 'd-none',
            badge: 'New',
            name: 'Safety Cones',
            price: '$15.00',
            oldPrice: '$19.00',
            category: 'Construction',
        },
        {
            id: '6',
            primaryImg: 'images/shop/products/2-1.jpg',
            secondaryImg: 'images/shop/products/2-2.jpg',
            newClass: 'badge-sale',
            oldClass: 'old_price',
            badge: 'Sale',
            name: 'Yellow Helmet',
            price: '$15.00',
            oldPrice: '$19.00',
            category: 'Construction',
        },
        {
            id: '7',
            primaryImg: 'images/shop/products/1-1.jpg',
            secondaryImg: 'images/shop/products/1-2.jpg',
            newClass: 'badge-new',
            oldClass: 'd-none',
            badge: 'New',
            name: 'Safety Cones',
            price: '$15.00',
            oldPrice: '$19.00',
            category: 'Construction',
        },
        {
            id: '8',
            primaryImg: 'images/shop/products/2-1.jpg',
            secondaryImg: 'images/shop/products/2-2.jpg',
            newClass: 'badge-sale',
            oldClass: 'old_price',
            badge: 'Sale',
            name: 'Yellow Helmet',
            price: '$15.00',
            oldPrice: '$19.00',
            category: 'Construction',
        },
        {
            id: '9',
            primaryImg: 'images/shop/products/1-1.jpg',
            secondaryImg: 'images/shop/products/1-2.jpg',
            newClass: 'badge-new',
            oldClass: 'd-none',
            badge: 'New',
            name: 'Safety Cones',
            price: '$15.00',
            oldPrice: '$19.00',
            category: 'Construction',
        },
        {
            id: '10',
            primaryImg: 'images/shop/products/2-1.jpg',
            secondaryImg: 'images/shop/products/2-2.jpg',
            newClass: 'badge-sale',
            oldClass: 'old_price',
            badge: 'Sale',
            name: 'Yellow Helmet',
            price: '$15.00',
            oldPrice: '$19.00',
            category: 'Construction',
        },
        {
            id: '11',
            primaryImg: 'images/shop/products/1-1.jpg',
            secondaryImg: 'images/shop/products/1-2.jpg',
            newClass: 'badge-new',
            oldClass: 'd-none',
            badge: 'New',
            name: 'Safety Cones',
            price: '$15.00',
            oldPrice: '$19.00',
            category: 'Construction',
        },
        {
            id: '12',
            primaryImg: 'images/shop/products/2-1.jpg',
            secondaryImg: 'images/shop/products/2-2.jpg',
            newClass: 'badge-sale',
            oldClass: 'old_price',
            badge: 'Sale',
            name: 'Yellow Helmet',
            price: '$15.00',
            oldPrice: '$19.00',
            category: 'Construction',
        },

    ];
    return (
        <div className="tab-content">
            <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                <div className="product_view_type">
                    <div className="product_view_grid product_col_3 type_1">
                        {
                            ProductData.map(data => <ProductItem
                                key={data.id}
                                data={data}
                            />)
                        }

                    </div>

                    <PaginationDiv02 />
                </div>
            </div>
            <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab">
                <div className="product_view_list">
                    {
                        ProductData.map(data => <ListProductItem
                            key={data.id}
                            data={data}
                        />)
                    }

                    <div className="button_group">
                        <button className="load_more button">Show More</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TabContent;