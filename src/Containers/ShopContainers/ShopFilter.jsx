import $ from 'jquery';
import React, { useEffect } from 'react';
// import Select2 from 'react-select2-wrapper';
// import 'react-select2-wrapper/css/select2.css';

const ShopFilter = () => {
    useEffect(() => {
        // Load More Content
        $(".product_view_list .product_item").slice(0, 6).show();
        $(".product_view_list .load_more").on("click", function (e) {
            e.preventDefault();
            $(".product_view_list .product_item:hidden").slice(0, 3).slideDown();
            if ($(".product_view_list .product_item:hidden").length == 0) {
                $(".product_view_list .load_more").css('display', 'none');
            }
        });

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
        <div className="shop_filtering_method d-flex align-items-center flex-wrap">
            <div className="view_type_wrapper d-flex align-items-center">
                <ul className="nav view_type d-flex align-items-center">
                    <li>
                        <a className="icon-grid active" id="grid-tab" data-bs-toggle="tab" href="#grid"><i className="fa fa-th" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a className="icon-list" id="list-tab" data-bs-toggle="tab" href="#list"><i className="fa fa-th-list" aria-hidden="true"></i></a>
                    </li>
                </ul>
                <div className="showing_results">
                    Showing 1-12 of 42 results
                </div>
            </div>
            <div className="sorting_wrapper">
                <div className="sorting_select">
                    <div className="basic_select" id="sorting">
                        {/* <Select2
                            data={[
                                { text: 'Default Sorting', id: 0 },
                                { text: 'Title', id: 1 },
                                { text: 'Price: Low to High', id: 2 },
                                { text: 'Price: High to Low', id: 3 },
                                { text: 'Popular', id: 4 },
                            ]}
                            options={{
                                placeholder: 'Default Sorting',
                            }}
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopFilter;