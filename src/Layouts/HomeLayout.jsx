import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/common/Footer';
// import Header from '../Components/common/Header';
import PostFooter from '../Components/common/PostFooter';
import Header02 from '../Components/common/Header02';

const HomeLayout = () => {
    return (
        <>
            <Header02 />
            <Outlet />
            <Footer />
            <PostFooter />
        </>
    );
};

export default HomeLayout;