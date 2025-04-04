import React from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from '../../Components/ShopElements/ProductItem';

const RelatedProducts = () => {
    const RelatedProductData = [
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

    ];

    return (
        <div className="related_products">
            <div className="container">
                <div className="section_header">
                    <h1 className="section_title">Related Items</h1>
                </div>

                <Swiper
                    className="product_view_grid type_4 product_carousel_1 owl-carousel owl-theme"
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
                        speed: 3000
                    }}
                    slidesPerView={3}
                    loop={true}
                    spaceBetween={50}
                    pagination={{
                        el: '.testimonial-pagination',
                        clickable: true,
                        dynamicBullets: true,
                    }}
                >

                    {
                        RelatedProductData.map(data =>
                            <SwiperSlide>
                                <ProductItem
                                    key={data.id}
                                    data={data}
                                /></SwiperSlide>)
                    }


                </Swiper>

                {/* <!-- Add Pagination --> */}
                <div className="testimonial-pagination"></div>

            </div>
        </div>
    );
};

export default RelatedProducts;