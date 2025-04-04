import React from 'react';
import '../../assets/css/style.css';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <>
            {/* <div className="header-layer-bg"></div> */}

            <main className="page-wrapper">
                <section className="error-page">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-10 offset-lg-1">
                                <div className="error-content text-center">
                                    <div className="heading">404</div>
                                    <h1 className='py-3'>Page Not Found</h1>
                                    <p className='pb-3'>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>

                                    <div className="btn_group">
                                        <a href='/' className="button">Back To Home Page</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ErrorPage;