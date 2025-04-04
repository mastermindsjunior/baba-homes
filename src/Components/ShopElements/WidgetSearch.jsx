import React from 'react';

const WidgetSearch = () => {
    return (
        <div id="search" className="widget widget_search">
            <div className="sidebar_search">
                <form className="search_form" action="search.php">
                    <input type="text" name="search" className="keyword form-control" placeholder="Search Products" />
                    <button type="submit" className="form-control-submit"><i className="ion-ios-search"></i></button>
                </form>
            </div>
        </div>
    );
};

export default WidgetSearch;