import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer02 from '../Components/common/Footer02';
import Header02 from '../Components/common/Header02';
import PostFooter from '../Components/common/PostFooter';

const HomeLayout02 = () => {
    return (
        <>
            <Header02 />
            <Outlet />
            <Footer02 />
            <PostFooter />
        </>
    );
};

export default HomeLayout02;