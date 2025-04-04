import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/common/Footer';
import Header from '../Components/common/Header';
import PostFooter from '../Components/common/PostFooter';

const HomeLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <PostFooter />
        </>
    );
};

export default HomeLayout;