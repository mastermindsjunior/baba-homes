import React from 'react';
import FunBox02 from '../../Components/FunFactElements/FunBox02';

const FunFact02 = () => {
    const FunData02 = [
        {
            id: '1',
            img: 'images/funfact/p5.png',
            number: '33',
            name: 'Under Construction'
        },
        {
            id: '2',
            img: 'images/funfact/p6.png',
            number: '100',
            name: 'Expert Builders'
        },
        {
            id: '3',
            img: 'images/funfact/p7.png',
            number: '300',
            name: 'Projects Handover'
        },
    ];

    return (
        <div id="funfacts" className="funfacts2">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="funfacts2_bg">
                            {
                                FunData02.map(data =>
                                    <FunBox02
                                        key={data.id}
                                        data={data}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FunFact02;