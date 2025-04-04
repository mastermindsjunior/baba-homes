import React from 'react';
import BlogCards01 from '../../Components/BlogCards/BlogCards01';
import LatestNews from '../../Components/LatestNews';

const Blog = () => {
    const BlogDataHome01 = [
        {
            id: '1',
            img: 'images/blog/b6.png',
            blogClass: 'col-lg-4 col-md-6',
            title: 'Diversity in Building Celebrated by Builderrine',
            description: 'Builderrine will connect with 10000 people from 90 companies who work on its’ projects each day...'
        },
        {
            id: '2',
            img: 'images/blog/b7.png',
            blogClass: 'col-lg-4 col-md-6',
            title: 'Company Receives Recognition for Excellence',
            description: 'The construction industry has the capacity to absorb more people into the workforce...'
        },

    ];

    return (
        <div className="blog section">
            <div className="container">
                <div className="blog_grid">
                    <div className="row">
                        <LatestNews />

                        {
                            BlogDataHome01.map(data => <BlogCards01
                                key={data.id}
                                data={data}
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;