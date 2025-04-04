import React from 'react';

const ListProductItem = ({ data }) => {
    const { primaryImg, secondaryImg, newClass, oldClass, badge, name, price, oldPrice } = data;

    return (
        <div className="product_item">
            <div className="product_thumb">
                <div className="product_imagebox">
                    <span className={newClass}>{badge}</span>
                    <img className="primary_img" src={primaryImg} alt="img" />
                    <img className="secondary_img" src={secondaryImg} alt="img" />
                </div>
                <div className="product_item_inner">
                    <div className="label_text">

                        <h4 className="product_item_name"><a href="#">{name}</a></h4>
                        <div className="rating">
                            <ul>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star-half-o"></i></li>
                                <li><i className="fa fa-star-o"></i></li>
                            </ul>
                        </div>
                        <h3 className="product_item_price"><del className={oldClass}>{oldPrice}</del> {price}</h3>
                        <div className="cart_button">
                            <a href="#" className="button effect_1">
                                Add To Cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListProductItem;