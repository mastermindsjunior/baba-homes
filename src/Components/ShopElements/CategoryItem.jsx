import React from 'react';

const CategoryItem = ({ data }) => {
    const { name, classThree, item1, item2, item3, toolID, href } = data;

    return (
        <li className="category_item">
            <div className="category_item_inner">
                <div className="cat_name"><a href="#">{name}</a></div>
                <span className="cat_toggler">
                    <a data-bs-toggle="collapse" href={href}>
                        <i className="fa fa-chevron-right"></i>
                    </a>
                </span>
            </div>
            <ul id={toolID} className="child_category collapse">
                <li>
                    <div className="cat_name"><a href="#">{item1}</a></div>
                </li>
                <li>
                    <div className="cat_name"><a href="#">{item2}</a></div>
                </li>
                <li className={classThree}>
                    <div className="cat_name"><a href="#">{item3}</a></div>
                </li>
            </ul>
        </li>
    );
};

export default CategoryItem;