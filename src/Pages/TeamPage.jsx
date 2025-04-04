import React from 'react';
import PageHeader from '../Components/common/PageHeader';
import PaginationDiv from '../Components/TeamElements/PaginationDiv';
import TeamCard02 from '../Components/TeamElements/TeamCard02';

const TeamPage = () => {
    const TeamData02 = [
        {
            id: '1',
            img: 'images/team/6.png',
            tag: 'CEO',
            name: 'Oscar Holland'
        },
        {
            id: '2',
            img: 'images/team/7.png',
            tag: 'Constructor',
            name: 'Christpher Neel'
        },
        {
            id: '3',
            img: 'images/team/8.png',
            tag: 'Constructor',
            name: 'Kiara Nordstorm'
        },
        {
            id: '4',
            img: 'images/team/team-5.jpg',
            tag: 'CEO',
            name: 'Loyed CLive'
        },
        {
            id: '5',
            img: 'images/team/team-6.jpg',
            tag: 'CEO',
            name: 'Nick Jonas'
        },
        {
            id: '6',
            img: 'images/team/team-4.jpg',
            tag: 'CEO',
            name: 'Kevin Peterson'
        },
    ];


    return (
        <>
            <PageHeader activeClass01='active' activeClass02='d-none' routeName01='Team' heading='Our Team' />

            <div className="main_wrapper">
                <div className="section team">
                    <div className="container">
                        <div className="row">
                            {
                                TeamData02.map(data => <TeamCard02
                                    key={data.id}
                                    data={data}
                                />)
                            }

                            <PaginationDiv />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamPage;