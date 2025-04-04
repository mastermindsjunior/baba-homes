import $ from 'jquery';
import React, { useEffect } from 'react';

const ProductView = () => {

    useEffect(() => {
        // Product Zoom
        $('.product_zoom_button_group > li > a').eq(0).addClass("selected");
        $('.product_zoom_container > .product_zoom_info').eq(0).css('display', 'block');
        $('.product_zoom_button_group').on("click", function (e) {
            if ($(e.target).is("a")) {

                /*Handle Tab Nav*/
                $('.product_zoom_button_group > li > a').removeClass("selected");
                $(e.target).addClass("selected");

                /*Handles Tab Content*/
                var clicked_index = $("a", this).index(e.target);
                $('.product_zoom_container > .product_zoom_info').css('display', 'none');
                $('.product_zoom_container > .product_zoom_info').eq(clicked_index).fadeIn();
            }
            $(this).blur();
            return false;
        });

    }, []);
    return (
        <div className="section product_view">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 pe-lg-5">
                        <div className="product_left">
                            <div className="product_zoom">
                                <ul className="product_zoom_button_group">
                                    <li className="product_zoom_button">
                                        <a className="selected" href="#" style={{ backgroundImage: `url(images/shop/single/1.jpg)` }}></a>
                                    </li>
                                    <li className="product_zoom_button">
                                        <a href="#" style={{ backgroundImage: `url(images/shop/single/2.jpg)` }}></a>
                                    </li>
                                    <li className="product_zoom_button">
                                        <a href="#" style={{ backgroundImage: `url(images/shop/single/3.jpg)` }}></a>
                                    </li>
                                    <li className="product_zoom_button">
                                        <a href="#" style={{ backgroundImage: `url(images/shop/single/4.jpg)` }}></a>
                                    </li>
                                    <li className="product_zoom_button">
                                        <a href="#" style={{ backgroundImage: `url(images/shop/single/5.jpg)` }}></a>
                                    </li>
                                    <li className="product_zoom_button">
                                        <a href="#" style={{ backgroundImage: `url(images/shop/single/6.jpg)` }}></a>
                                    </li>
                                </ul>

                                <div className="product_zoom_container">
                                    <div className="product_zoom_info selected">
                                        <div className="product_image_zoom">
                                            <img src="images/shop/single/1.jpg" alt="img" />
                                        </div>
                                    </div>

                                    <div className="product_zoom_info">
                                        <div className="product_image_zoom">
                                            <img src="images/shop/single/2.jpg" alt="img" />
                                        </div>
                                    </div>

                                    <div className="product_zoom_info">
                                        <div className="product_image_zoom">
                                            <img src="images/shop/single/3.jpg" alt="img" />
                                        </div>
                                    </div>

                                    <div className="product_zoom_info">
                                        <div className="product_image_zoom">
                                            <img src="images/shop/single/4.jpg" alt="img" />
                                        </div>
                                    </div>

                                    <div className="product_zoom_info">
                                        <div className="product_image_zoom">
                                            <img src="images/shop/single/5.jpg" alt="img" />
                                        </div>
                                    </div>

                                    <div className="product_zoom_info">
                                        <div className="product_image_zoom">
                                            <img src="images/shop/single/6.jpg" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 ps-lg-0 pe-lg-5">
                        <div className="product_right">
                            <div className="product_info">
                                <div className="product_title"><h2>Safty Cone</h2></div>
                                <div className="product_rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-half-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <div className="product_rating_details">(35 Customer Reviews)</div>
                                </div>
                            </div>
                            <div className="product_price">
                                <span className="product_per_price"></span> $<span className="product_total_price">320.5</span>
                            </div>
                            <div className="product_description">
                                Ut enim ad minima veniam, quis nostrum exercitationem corporis commosequatur? Quis autem vel eum iure veniam, quis nostrum sequatur? Quis autem vel eum iure...
                            </div>
                            <div className="product_view_bottom">
                                <div className="product_quantity">
                                    <div className="pproduct_quantity_label">Quantity</div>
                                    <div className="product_quantity_inner">
                                        <span className="product_quantity_subtract">
                                            <i className="ion-android-remove"></i>
                                        </span>
                                        <input type="text" id="product_quantity_input" placeholder="0" value="1" />
                                        <span className="product_quantity_add">
                                            <i className="ion-android-add"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="wish_button">
                                    <a href="#"><i className="fa fa-heart-o"></i></a>
                                </div>
                                <div className="compare_button">
                                    <a href="#"><i className="ion-connection-bars"></i></a>
                                </div>
                            </div>

                            <div className="cart_button">
                                <a className="button" href="#" >Add to Cart</a>
                            </div>

                            <div className="product_view_bottom_credential">
                                <ul className="px-0 mb-0">
                                    <li className="categories"><span>Category:</span> <a href="#">Biulder</a></li>
                                    <li className="sku"><span>SKU:</span> 07</li>
                                    <li className="tags"><span>Tags:</span> <a href="#">Hardware</a> <a href="#">Metal</a> <a href="#">Cement</a></li>
                                </ul>
                            </div>
                            <div className="product_social_share">
                                <ul>
                                    <li className="label_text">Share:</li>
                                    <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                    <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                    <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                    <li className="youtube"><a href="#"><i className="ion-social-youtube"></i></a></li>
                                    <li className="pinterest"><a href="#"><i className="ion-social-pinterest-outline"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductView;