import React from 'react';

const PageHeader = (props) => {
    return (
        <div className="page_header">
            <div className="page_header_content">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li className={props.activeClass01}><a href={props.route01}> {props.routeName01} </a></li>
                        <li className={props.activeClass02}> {props.routeName02} </li>
                    </ul>
                    <h2 className="heading">{props.heading}</h2>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;