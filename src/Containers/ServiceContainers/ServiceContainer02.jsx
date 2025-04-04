import React from 'react';
import ServiceCard01_02 from '../../Components/ServiceCards/ServiceCard01_02';
import PaginationDiv from '../../Components/TeamElements/PaginationDiv';

const ServiceContainer02 = () => {
    const ServiceData02 = [
        {
            id: '1',
            img: 'images/services/icon1.png',
            bg: 'images/services/bg.png',
            title: 'Commertial Design and Building Construction',
            description: 'Extraordinary projects need vision & precision to be exceptional. I Need Builderrine Construction..',
        },
        {
            id: '2',
            img: 'images/services/icon2.png',
            bg: 'images/services/bg-1.png',
            title: 'Real Estate & Housing Construction',
            description: 'Builderrine projects demand a strategic & intelligent approach, finely honed real-world experience...',
        },
        {
            id: '3',
            img: 'images/services/icon3.png',
            bg: 'images/services/bg-2.png',
            title: 'Commertial Design & Building Construction',
            description: 'Extraordinary projects need vision & precision to be exceptional. I Need Builderrine Construction..',
        },
        {
            id: '4',
            img: 'images/services/icon4.png',
            bg: 'images/services/bg-3.png',
            title: 'Real Estate Housing Development',
            description: 'Builderrine projects demand a strategic & intelligent approach, finely honed real-world experience...',
        },
        {
            id: '5',
            img: 'images/services/icon5.png',
            bg: 'images/services/bg-4.png',
            title: 'Commercial Blueprint & Civil Engineering',
            description: 'Extraordinary projects need vision & precision to be exceptional. I Need Builderrine Construction..',
        },
        {
            id: '6',
            img: 'images/services/icon6.png',
            bg: 'images/services/bg-5.png',
            title: 'Modern Concrete project Building',
            description: 'Builderrine projects demand a strategic & intelligent approach, finely honed real-world experience...',
        },
        {
            id: '7',
            img: 'images/services/icon7.png',
            bg: 'images/services/bg-6.png',
            title: 'Commertial Powerplant Construction',
            description: 'Builderrine projects demand a strategic & intelligent approach, finely honed real-world experience...',
        },
        {
            id: '8',
            img: 'images/services/icon8.png',
            bg: 'images/services/bg-7.png',
            title: 'Architectural Design & development',
            description: 'Extraordinary projects demand a strategic & intelligent approach, finely honed real-world experience...',
        },
        {
            id: '9',
            img: 'images/services/icon9.png',
            bg: 'images/services/bg-8.png',
            title: 'Renewable energy plant Construction',
            description: 'Builderrine projects demand a strategic & intelligent approach, finely honed real-world experience...',
        },
    ];

    return (
        <div class="main_wrapper">
            <div class="section services">
                <div class="container">
                    <div class="row">
                        {
                            ServiceData02.map(data =>
                                <ServiceCard01_02
                                    key={data.id}
                                    data={data}
                                />
                            )
                        }

                    </div>

                    <PaginationDiv />
                </div>
            </div>
        </div>
    );
};

export default ServiceContainer02;