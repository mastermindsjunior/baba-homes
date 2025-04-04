import React from 'react';

const ProductDetails = () => {

    return (
        <div className="product_details_section">
            <div className="container">
                <div className="product_details_tab">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="active" data-bs-toggle="tab" href="#description">Description</a>
                        </li>
                        <li className="nav-item">
                            <a data-bs-toggle="tab" href="#information">Additional Information</a>
                        </li>
                        <li className="nav-item">
                            <a data-bs-toggle="tab" href="#reviews">Reviews (2)</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="description" tabindex="0">
                            <p>Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt eget. Leo a tempor id. A lacus vest ibulum sed arcu non odio euismod lacinia. In tellus integer feugiat sceleris que. Feugiat in ferme ntum posuere urna nec tincidunt praesent.</p>
                            <p>Porttitor rhonc elementum facilisis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectusSenectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ne semper auctor.</p>
                        </div>
                        <div className="tab-pane fade" id="information" tabindex="0">
                            <div className="product_additional_info">
                                <p className="mb-3">A lacus vestibulum sed arcu non odio euismod lacinia. In tellus integer feugiat scelerisque. Feugiat in fermentum posuere urna nec tincidunt praesent. Porttitor rhonc
                                    elementum facilisis.</p>
                                <ul className="px-0 mb-0">
                                    <li className="categories"><span>Material:</span> Cotton & Linen</li>
                                    <li className="sku"><span>Lenght:</span> 30 Inch</li>
                                    <li className="tags"><span>Weight:</span> 400gm</li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="reviews" tabindex="0">
                            <div className="review_sec">
                                <h6 className="review_title">1 review for <a href="#">Product Name</a></h6>
                                <ul className="review_area">
                                    {/* <!-- First Review --> */}
                                    <li className="blog_review_user">
                                        <div className="reviewer_div">
                                            <div className="reviewer">
                                                <img alt="img" src="images/blog/commenter1.png" className="avatar" />
                                            </div>
                                            <div className="review_block">
                                                <div className="product_rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h4 className="reviewer_name">Elezabeth Doe <span className="review_date">07/08/2022</span></h4>
                                                <p className="reviewer_review">Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Neque convallis a cras
                                                    semper auctor. Libero id faucibus nisl tincidunt eget. </p>

                                            </div>
                                        </div>
                                    </li>

                                    {/* <!-- Second Review --> */}
                                    <li className="blog_review_user">
                                        <div className="reviewer_div">
                                            <div className="reviewer">
                                                <img alt="img" src="images/blog/commenter2.png" className="avatar" />
                                            </div>
                                            <div className="review_block">
                                                <div className="product_rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <h4 className="reviewer_name">Jennifer Page <span className="review_date">29/07/2022</span></h4>
                                                <p className="reviewer_review">As the world continues to fight COVID-19 some property owners are searching for way they can improve the security of their buildings.</p>

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="reviews-pagination">
                                    <span aria-current="page" className="page-numbers current">1</span>
                                    <a className="page-numbers" href="#">2</a>
                                </div>
                            </div>

                            <div className="review_form">
                                <div className="review_form_heading_wrapper mb-4">
                                    <h4 className="review_form_title"><span>Add a Review</span></h4>
                                    <h6 className="review_form_sub_title">Your email address will not be published. Required fields are marked *</h6>
                                    <h6 className="give_rating">Your Rating *</h6>
                                    <div className="reviewer_rating">
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                </div>
                                <form action="contact.php" id="contact" method="POST">
                                    <div className="form-group mb-3">
                                        <textarea id="message" name="message" className="form-control" placeholder="Your review *" required></textarea>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Your E-mail *" required />
                                    </div>
                                    <div className="button_group">
                                        <input className="button alt" type="submit" value="Submit Review" name="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;