import React from 'react';
// import '../assets/plugins/price_range/script';
import CategoryItem from '../../Components/ShopElements/CategoryItem';
import WidgetSearch from '../../Components/ShopElements/WidgetSearch';
const ShopSidebar = () => {
    const CategoryData = [
        {
            "id": "1",
            "name": "Road Safty",
            "item1": "Divider Cone",
            "item2": "Signal Board",
            "item3": "Cross Line",
            "classThree": "d-block",
            "toolID": "tool_one",
            "href": "#tool_one"
        },
        {
            "id": "2",
            "name": "Machinery",
            "item1": "Drill",
            "item2": "Cutting",
            "item3": "Hitting",
            "classThree": "d-block",
            "toolID": "tool_two",
            "href": "#tool_two"
        },
        {
            "id": "3",
            "name": "Hardware",
            "item1": "Hammer",
            "item2": "Rense",
            "classThree": "d-none",
            "toolID": "tool_three",
            "href": "#tool_three"
        },
        {
            "id": "4",
            "name": "Cutting Tool",
            "item1": "Cutter",
            "item2": "Knife",
            "item3": "Plus",
            "classThree": "d-block",
            "toolID": "tool_four",
            "href": "#tool_four"
        },
        {
            "id": "5",
            "name": "Accessorries",
            "item1": "Spade",
            "item2": "Bucket",
            "item3": "Brush",
            "classThree": "d-block",
            "toolID": "tool_five",
            "href": "#tool_five"
        },
        {
            "id": "6",
            "name": "Safty Tools",
            "item1": "Jacket",
            "item2": "Helmet",
            "item3": "Gloves",
            "classThree": "d-block",
            "toolID": "tool_six",
            "href": "#tool_six"
        },
        {
            "id": "7",
            "name": "Transport",
            "item1": "Truck",
            "item2": "Trolly",
            "item3": "Dumper",
            "classThree": "d-block",
            "toolID": "tool_seven",
            "href": "#tool_seven"
        },


    ];
    return (
        <div className="shop_sidebar">
            <WidgetSearch />
            <div id="category" className="widget widget_categories">
                <h4 className="widget_title">
                    Product Categories
                    <span className="title_line"></span>
                </h4>
                <ul className="sidebar_category">
                    {
                        CategoryData.map(data => <CategoryItem
                            key={data.id}
                            data={data}
                        ></CategoryItem>)
                    }

                </ul>
            </div>

            {/* <div id="pricerange" className="widget widget_additional_filter">
                <h4 className="widget_title">
                    Price Filter
                    <span className="title_line"></span>
                </h4>
                <div className="sidebar_price_filter">
                    <div id="slider-range" className="range-bar"></div>
                    <div className="range-value d-flex justify-content-end">
                        <span>Price:</span> <input type="text" id="amount" readonly />
                    </div>
                </div>
            </div> */}

            <div id="brand" className="widget widget_brand">
                <h4 className="widget_title">
                    Filter by Brand
                    <span className="title_line"></span>
                </h4>
                <div className="sidebar_brand">
                    <form action="checkout.php" method="post">
                        <div className="form-check">
                            <label for="checkbox1">ChanMilwaukee (32)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox1" name="checkbox1" value="" />
                        </div>
                        <div className="form-check">
                            <label for="checkbox2">Makita (09)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox2" name="checkbox2" checked value="" />
                        </div>
                        <div className="form-check">
                            <label for="checkbox3">DeWalt (02)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox3" name="checkbox3" value="" />
                        </div>
                        <div className="form-check">
                            <label for="checkbox4">Festool (12)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox4" name="checkbox4" value="" />
                        </div>
                        <div className="form-check">
                            <label for="checkbox5">Bosch Tools (22)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox5" name="checkbox5" value="" />
                        </div>
                        <div className="form-check">
                            <label for="checkbox6">Ridgid (16)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox6" name="checkbox6" value="" />
                        </div>
                    </form>
                </div>
            </div>

            <div id="size" className="widget widget_size">
                <h4 className="widget_title">
                    Filter by Size
                    <span className="title_line"></span>
                </h4>
                <div className="sidebar_brand">
                    <form action="checkout.php" method="post">
                        <div className="form-check">
                            <label for="checkbox7">XL (09)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox7" name="checkbox7" value="" />
                        </div>
                        <div className="form-check">
                            <label for="checkbox8">L (12)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox8" name="checkbox8" checked value="" />
                        </div>
                        <div className="form-check">
                            <label for="checkbox9">M (0)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox9" name="checkbox9" value="" />
                        </div>
                        <div className="form-check">
                            <label for="checkbox10">S (12)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox10" name="checkbox10" value="" />
                        </div>
                        <div className="form-check">
                            <label for="checkbox11">XS (22)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox11" name="checkbox11" value="" />
                        </div>
                    </form>
                </div>
            </div>

            <div id="popular" className="widget widget_popular_entries">
                <h4 className="widget_title">
                    Popular Products
                    <span className="title_line"></span>
                </h4>
                <div className="sidebar_popular_products">
                    <ul className="popular_product_list">
                        <li className="popular_product_item">
                            <div className="popular_product_image">
                                <img className="primary_img" src="images/shop/thumbs/thumb_1.png" alt="" />
                            </div>
                            <div className="popular_product_content">
                                <h5 className="product_title"><a href="#">Road Divider</a></h5>
                                <h6 className="product_price">$22.00</h6>
                            </div>
                        </li>
                        <li className="popular_product_item">
                            <div className="popular_product_image">
                                <img className="primary_img" src="images/shop/thumbs/thumb_2.png" alt="" />
                            </div>
                            <div className="popular_product_content">
                                <h5 className="product_title"><a href="#">Life Vest</a></h5>
                                <h6 className="product_price">$22.00</h6>
                            </div>
                        </li>
                        <li className="popular_product_item">
                            <div className="popular_product_image">
                                <img className="primary_img" src="images/shop/thumbs/thumb_3.png" alt="" />
                            </div>
                            <div className="popular_product_content">
                                <h5 className="product_title"><a href="#">Construction Helmet</a></h5>
                                <h6 className="product_price">$22.00</h6>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="tags" className="widget widget_tag_cloud">
                <h4 className="widget_title">
                    Product Tag
                    <span className="title_line"></span>
                </h4>
                <div className="sidebar_tags">
                    <ul className="tag_list">
                        <li><a href="#">Drill</a></li>
                        <li><a href="#">Hammer</a></li>
                        <li><a href="#">Helmet</a></li>
                        <li><a href="#">Roller</a></li>
                        <li><a href="#">Bucket</a></li>
                        <li><a href="#">Paint</a></li>
                        <li><a href="#">Truck</a></li>
                    </ul>
                </div>
            </div>

        </div>

    );
};

export default ShopSidebar;