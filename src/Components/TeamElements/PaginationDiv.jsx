import React from 'react';

const PaginationDiv = () => {
    return (
        <div className="pagination-div">
            <ul className="pagination">
                <li><a href="#"><i className="ion-chevron-left"></i></a></li>
                <li><a className="page-number current" href="#">1</a></li>
                <li><a className="page-number" href="#">2</a></li>
                <li><a className="page-number" href="#">3</a></li>
                <li><a href="#"><i className="ion-chevron-right"></i></a></li>
            </ul>
        </div>
    );
};

export default PaginationDiv;