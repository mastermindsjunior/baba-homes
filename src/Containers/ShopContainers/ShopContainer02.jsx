import ShopFilter from './ShopFilter';
import ShopSidebar from './ShopSidebar';
import TabContent from './TabContent';

const ShopContainer02 = () => {
    return (
        <section className="shop_page bg-dark-200">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-7 col-sm-8 ps-lg-4">
                        <ShopFilter />
                        <TabContent />
                    </div>

                    <div className="col-lg-3 col-md-5 col-sm-4">
                        <ShopSidebar />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopContainer02;