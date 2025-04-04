import React from 'react';
import ServiceCard02_01 from '../../Components/ServiceCards/ServiceCard02_01';
import PaginationDiv from '../../Components/TeamElements/PaginationDiv';

const ServiceContainer01 = () => {
    const ServiceData01 = [
        {
            id: '1',
            img02: 'images/services/Service_Hover_images/Single home.png',
            tag: 'Detached House in Edmonton',
            title: 'Detached Homes in Edmonton - Spacious, Private, and Perfect for Families',
            info_title: "Find Your Dream Detached Home with CDC Homes",
            info_desc: "A detached house is a standalone home with no shared walls, offering maximum privacy and space. Ideal for families, professionals, and investors, detached homes in Edmonton come in various architectural styles, including modern, traditional, and luxury designs.",
            info_title2: "Benefits of a Detached Home in Edmonton:",
            info_list: [
                { name: "Complete Privacy -", desc: " No shared walls with neighbors" },
                { name: "Spacious Living Areas -", desc: " Larger yards and more square footage" },
                { name: "Customization Freedom -", desc: " Modify and renovate as per your needs" },
                { name: "Higher Resale Value -", desc: " Detached homes appreciate well in Edmonton’s real estate market" }
            ],
            info_desc2: "📞 Looking for a detached home in Edmonton? Contact CDC Homes today to explore available options!"
        },
        {
            id: '2',
            img02: 'images/services/Service_Hover_images/Bungalows.png',
            tag: 'Semi-Detached House in Edmonton',
            title: 'Semi-Detached Homes in Edmonton – A Perfect Balance of Affordability & Privacy',
            info_title: "Stylish & Modern Semi-Detached Homes for Every Lifestyle",
            info_desc: "A semi-detached home shares one common wall with another house, offering a balance between affordability and privacy. Popular among first-time buyers and families, these homes provide ample space with lower costs than detached homes.",
            info_title2: "Why Choose a Semi-Detached Home?",
            info_list: [
                { name: "Cost-Effective -", desc: " More affordable than fully detached homes" },
                { name: "Spacious Yet Compact -", desc: " Efficient layouts for modern living" },
                { name: "Private Yard & Parking -", desc: " Enjoy outdoor space without maintenance hassle" },
                { name: "Great Investment -", desc: " Strong demand in Edmonton’s real estate market" }
            ],
            info_desc2: "📞 Looking for a semi-detached home in Edmonton? Let CDC Homes help you find the right property!"
        },
        {
            id: '3',
            img02: 'images/services/Service_Hover_images/Townhouses.png',
            tag: 'Townhouses in Edmonton',
            title: 'Townhouses for Sale in Edmonton – Modern, Affordable & Community-Oriented',
            info_title: "Discover Stylish Multi-Floor Townhomes in Edmonton",
            info_desc: "A townhouse is a multi-floor home that shares common walls with adjacent units. These homes are perfect for those who want a low-maintenance lifestyle with modern amenities in Edmonton’s best neighborhoods.",
            info_title2: "Why Buy a Townhouse in Edmonton?",
            info_list: [
                { name: "Affordable Homeownership -", desc: " Lower costs than detached homes" },
                { name: "Community Living -", desc: " Safe and friendly neighborhood settings" },
                { name: "Modern Amenities -", desc: " Often part of gated communities with parks, gyms, and pools" },
                { name: "Convenient Locations -", desc: " Close to schools, shopping, and transit" }
            ],
            info_desc2: "📞 Interested in buying a townhouse in Edmonton? CDC Homes has premium listings for you!"
        },
        {
            id: '4',
            img02: 'images/services/Service_Hover_images/Duplexes.png',
            tag: 'Duplex Homes in Edmonton',
            title: 'Duplex Homes in Edmonton – Smart Living & Investment Opportunity',
            info_title: "Explore Affordable, Spacious, and Versatile Duplexes",
            info_desc: "A duplex is a single building divided into two separate living units, making it a great choice for multi-generational families or investors looking for rental income. Duplex homes in Edmonton offer modern designs, spacious layouts, and excellent affordability.",
            info_title2: "Benefits of Living in a Duplex",
            info_list: [
                { name: "Great Investment Property -", desc: " Live in one unit and rent out the other" },
                { name: "More Space, Less Cost -", desc: " Affordable alternative to detached homes" },
                { name: "Separate Entrances & Utilities -", desc: " Ensures privacy and convenience" },
                { name: "Ideal for Families & Investors -", desc: " Multiple living options in one property" }
            ],
            info_desc2: "📞 Looking for a duplex home in Edmonton? Contact CDC Homes today to find the best options!"
        },
        {
            id: '5',
            img02: 'images/services/Service_Hover_images/Multi-Family Homes.png',
            tag: 'Triplex & Fourplex Homes in Edmonton',
            title: 'Triplex & Fourplex Homes in Edmonton – Multi-Unit Investment Properties',
            info_title: "Maximize Your Investment with Multi-Family Residential Homes",
            info_desc: "Triplex and fourplex homes are multi-unit properties with three or four separate living spaces, each with its entrance. These homes are perfect for real estate investors, rental property owners, and multi-family living.",
            info_title2: "Advantages of Triplex & Fourplex Homes",
            info_list: [
                { name: "High Rental Income Potential -", desc: " Multiple tenants, higher ROI" },
                { name: "Affordable Multi-Family Living -", desc: " Ideal for extended families" },
                { name: "Cost-Efficient Property Management -", desc: " One building, multiple units" },
                { name: "Edmonton’s Growing Rental Market -", desc: " Strong demand for rental properties" }
            ],
            info_desc2: "📞 Want to invest in a triplex or fourplex in Edmonton? CDC Homes can help you find the best properties!"
        },
        {
            id: '6',
            img02: 'images/services/Service_Hover_images/Bungalows.png',
            tag: 'Bungalows in Edmonton',
            title: 'Bungalows in Edmonton – Elegant Single-Story Homes for Comfortable Living',
            info_title: "Explore Spacious & Accessible Bungalows in Edmonton",
            info_desc: "A bungalow is a single-story home that offers easy accessibility, spacious layouts, and a cozy atmosphere. Popular among families, retirees, and those seeking open-concept living, bungalows in Edmonton come with large yards and basement options.",
            info_title2: "Why Choose a Bungalow?",
            info_list: [
                { name: "No Stairs, Easy Accessibility -", desc: " Perfect for seniors and families" },
                { name: "Spacious & Open-Concept Design -", desc: " More natural light and better ventilation" },
                { name: "Large Yard Space -", desc: " Ideal for gardening and outdoor activities" },
                { name: "High Resale Value -", desc: " Always in demand in Edmonton’s housing market" }
            ],
            info_desc2: "📞 Looking for a bungalow in Edmonton? Let CDC Homes help you find the perfect one!"
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

export default ServiceContainer01;