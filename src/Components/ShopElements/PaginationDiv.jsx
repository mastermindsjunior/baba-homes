import React from 'react';

const PaginationDiv = () => {
    return (
        <div className="pagination-div">
            <ul className="pagination">
                <li><a href="#"><i className="ion-chevron-left"></i></a></li>
                <li><a className="page-number current" href="#">01</a></li>
                <li><a className="page-number" href="#">02</a></li>
                <li>...</li>
                <li><a className="page-number" href="#">10</a></li>
                <li><a href="#"><i className="bi bi-chevron-right"></i></a></li>
            </ul>
        </div>
    );
};

export default PaginationDiv;