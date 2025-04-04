import React from 'react';
import { Link } from "react-router-dom";

const CuponCode = () => {
    return (
        <div className="couponcart">
            <div className="set_coupon">
                <div className="form-group">
                    <input type="text" className="form-control" name="coupon" placeholder="Coupon Code" />
                </div>
                <div className="btn_group">
                    <input className="btn olive" type="submit" value="Apply Coupon" name="submit" />
                </div>
            </div>
            <div className="cartupdate">
                <div className="btn_group">
                    <Link to='/shop-checkout'>
                        <input className="btn white" type="submit" value="Update Cart" name="submit" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CuponCode;