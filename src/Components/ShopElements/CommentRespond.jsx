import React from 'react';

const CommentRespond = () => {
    return (
        <div className="comment-respond">
            <h3 className="comment-reply-title">Make A Comment <span className="title-line"></span></h3>
            <form className="comment-form" action="register.php" method="post">
                <p className="logged-in-as">Your email address will not be published. Required fields are marked *</p>
                <div className="form-container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" placeholder="Name*" required="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="form-group">
                                <input type="email" name="email" className="form-control" placeholder="E-mail*" required="" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                            <div className="form-group">
                                <textarea name="message" className="form-control" placeholder="Text Here*" required="" ></textarea>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                            <div className="btn_group">
                                <input className="btn olive" type="submit" value="Submit" name="submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CommentRespond;