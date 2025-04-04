import React from 'react';

const RelatedProductCard = ({ data }) => {
    const { primaryImg, secondaryImg, newClass, oldClass, badge, name, price, oldPrice, category } = data;

    return (
        <div className="item">
            <div className="product_item">
                <div className="product_thumb">
                    <div className="product_imagebox">
                        <span className="badge-new">New</span>
                        <img className="primary_img" src="images/shop/products/1-1.jpg" alt="img" />
                        <img className="secondary_img" src="images/shop/products/1-2.jpg" alt="img" />
                        <div className="cart_button">
                            <a href="#" className="button effect_1">
                                Add To Cart
                            </a>
                        </div>
                    </div>
                    <div className="product_item_inner">
                        <div className="label_text">

                            <h4 className="product_item_name"><a href="#">Safty Cone</a></h4>
                            <div className="rating">
                                <ul>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                            </div>
                            <h3 className="product_item_price">$15.00</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedProductCard;