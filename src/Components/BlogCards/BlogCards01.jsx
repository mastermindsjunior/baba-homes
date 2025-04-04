import React from 'react';

const BlogCards01 = ({ data }) => {
    const { blogClass, title, description, img } = data;
    return (
        <div className={blogClass}>
            <article className="blog_post">
                <div className="post_img">
                    <a href="/blog-1"><img src={img} alt="img" /></a>
                    <div className="calendar">
                        <a href="#"><span className="date">30</span><br />May</a>
                    </div>
                </div>
                <div className="post_content">
                    <div className="post_header">
                        <h3 className="post_title">
                            <a href="/blog-2">{title}</a>
                        </h3>
                    </div>
                    <div className="post_intro">
                        <p>{description}</p>
                    </div>
                    <div className="post_footer">
                        <div className="read_more">
                            <a href="/blog-details"><span>Read Article</span></a>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogCards01;