import React from 'react';

const PaginationDiv02 = () => {
    return (
        <div className="pagination-div">
            <ul className="pagination">
                <li><a className="page-number current" href="#">1</a></li>
                <li><a className="page-number" href="#">2</a></li>
                <li><a className="page-number" href="#">3</a></li>
                <li><a className="page-number" href="#">4</a></li>
                <li><a className="page-number" href="#">...</a></li>
                <li><a className="page-number" href="#">8</a></li>
                <li><a href="#"><i className="bi bi-chevron-right"></i></a></li>
            </ul>
        </div>
    );
};

export default PaginationDiv02;