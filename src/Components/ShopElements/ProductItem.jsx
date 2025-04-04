import React from 'react';

const ProductItem = ({ data }) => {
    const { primaryImg, secondaryImg, newClass, oldClass, badge, name, price, oldPrice, category } = data;
    return (
        <div className="product_item">
            <div className="product_thumb">
                <div className="product_imagebox">
                    <span className={newClass}>{badge}</span>
                    <img className="primary_img" src={primaryImg} alt="img" />
                    <img className="secondary_img" src={secondaryImg} alt="img" />
                    <div className="cart_button">
                        <a href="#" className="button effect_1">
                            Add to Cart
                        </a>
                    </div>
                </div>
                <div className="product_item_inner">
                    <div className="label_text">
                        <h4 className="product_item_name"><a href="#">{name}</a> <span className="product_item_price"><del className={oldClass}>{oldPrice}</del> {price}</span></h4>
                        <div className="product_category"><a href="#">{category}</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;