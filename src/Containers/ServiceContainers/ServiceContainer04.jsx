import React from 'react';
import ServiceCard02_01 from '../../Components/ServiceCards/ServiceCard02_01';
import PaginationDiv from '../../Components/TeamElements/PaginationDiv';

const ServiceContainer04 = () => {
    const ServiceData01 = [
        {
            id: '1',
            img02: 'images/services/Service_Hover_images/office_building.jpg',
            tag: 'Office Buildings in Edmonton',
            title: 'Office Buildings in Edmonton – Premium Commercial Spaces for Businesses',
            info_title: "Find High-Rise and Low-Rise Office Buildings for Lease or Sale",
            info_desc: "Office buildings in Edmonton range from modern high-rise towers to functional low-rise commercial spaces, providing prime locations for businesses of all sizes. Whether you're looking for a corporate headquarters, coworking space, or professional office, CDC Homes helps you find the perfect office building in Edmonton.",
            info_title2: "Why Invest in Office Buildings?",
            info_list: [
                { name: "Strategic Business Locations -", desc: " Access prime commercial areas" },
                { name: "Flexible Workspaces -", desc: " Customizable office layouts" },
                { name: "Modern Amenities -", desc: " High-speed internet, meeting rooms, and security" },
                { name: "Strong Investment Potential -", desc: " High demand for office spaces in Edmonton" }
            ],
            info_desc2: "📞 Looking for an office building in Edmonton? Contact CDC Homes today for leasing and investment opportunities!"
        },
        {
            id: '2',
            img02: 'images/services/Service_Hover_images/retail_store.jpg',
            tag: 'Retail Buildings in Edmonton',
            title: 'Retail Buildings in Edmonton – Prime Locations for Businesses & Investors',
            info_title: "Find High-Traffic Retail Spaces, Shopping Malls & Standalone Stores",
            info_desc: "From strip malls and shopping centers to standalone stores, Edmonton offers prime retail spaces for businesses looking to attract customers. Whether you’re a franchise owner, local retailer, or investor, CDC Homes helps you find the best retail buildings in Edmonton.",
            info_title2: "Why Choose a Retail Building in Edmonton?",
            info_list: [
                { name: "High Visibility & Foot Traffic -", desc: " Located in busy commercial zones" },
                { name: "Flexible Storefront Options -", desc: " From small shops to large malls" },
                { name: "Great Investment Opportunity -", desc: " Strong demand for retail spaces" },
                { name: "Ideal for Franchises & Local Businesses -", desc: " Customizable spaces to match brand identity" }
            ],
            info_desc2: "📞 Searching for a retail building in Edmonton? Explore top commercial properties with CDC Homes!"
        },
        {
            id: '3',
            img02: 'images/services/Service_Hover_images/warehouse.jpg',
            tag: 'Industrial Buildings in Edmonton',
            title: 'Industrial Buildings in Edmonton – Warehouses, Factories & Distribution Centers',
            info_title: "Discover Industrial Spaces Designed for Efficiency & Growth",
            info_desc: "Industrial buildings play a crucial role in manufacturing, logistics, and storage. Whether you need a warehouse, production facility, or distribution center, Edmonton offers high-quality industrial properties to support your business operations.",
            info_title2: "Benefits of Industrial Buildings in Edmonton:",
            info_list: [
                { name: "Large Warehouse Spaces -", desc: " Ideal for manufacturing, storage, and logistics" },
                { name: "High Ceilings & Loading Docks -", desc: " Designed for industrial operations" },
                { name: "Proximity to Highways & Transport Hubs -", desc: " Easy logistics and distribution" },
                { name: "Cost-Effective Commercial Property Options -", desc: " Various sizes to fit different business needs" }
            ],
            info_desc2: "📞 Need an industrial building in Edmonton? CDC Homes connects you with the best properties for your business!"
        },
        {
            id: '4',
            img02: 'images/services/Service_Hover_images/office_building.jpg', // Reusing office building image for mixed-use
            tag: 'Mixed-Use Buildings in Edmonton',
            title: 'Mixed-Use Buildings in Edmonton – Smart & Sustainable Investment Properties',
            info_title: "Residential, Retail, & Office Spaces in One Convenient Location",
            info_desc: "Mixed-use buildings combine residential, retail, and office spaces, creating a vibrant, multi-functional environment. These properties are ideal for developers, investors, and businesses looking for high-value real estate in Edmonton.",
            info_title2: "Why Invest in Mixed-Use Buildings?",
            info_list: [
                { name: "Diversified Revenue Streams -", desc: " Earn from residential, retail, and office tenants" },
                { name: "High-Demand Urban Spaces -", desc: " Ideal for city living and business operations" },
                { name: "Sustainable & Community-Oriented -", desc: " Designed for modern lifestyles" },
                { name: "Great for Investors & Businesses -", desc: " Long-term appreciation and rental income potential" }
            ],
            info_desc2: "📞 Interested in mixed-use buildings in Edmonton? CDC Homes offers premium real estate options for investors and developers!"
        }
    ];

    return (
        <div className="main_wrapper">
            <div className="section service services_inner_page">
                <div className="container">
                    <div className="row">
                        {
                            ServiceData01.map(data =>
                                <ServiceCard02_01
                                    key={data.id}
                                    data={data}
                                />
                            )
                        }

                        {/* <PaginationDiv /> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceContainer04;