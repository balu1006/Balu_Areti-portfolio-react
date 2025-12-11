import React from 'react';
// Assuming images are available, simplified for now
import blogImg1 from '../assets/images/blog1_2023/first-step.webp';
// import blogImg2 from '../assets/images/blog1_2023/pexels-laura-stanley-5644292.webp';

const Blog = () => {
    return (
        <section className="colorlib-blog" data-section="blog" id="blog">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Read</span>
                        <h2 className="colorlib-heading">Recent Blog</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                        <div className="blog-entry">
                            <div className="blog-img">
                                <img src={blogImg1} className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" />
                            </div>
                            <div className="desc">
                                <span><small>FEB 2023 </small> | <small> Life style Design </small> | <small> 4</small></span>
                                <h3><a href="https://chrisguillebeau.com/lifestyle-design-and-your-ideal-world" target="_blank" rel="noopener noreferrer">Lifestyle Design and Your Ideal World</a></h3>
                                <p>The Ideal World Exercise This is a complementary exercise where you write out your ideal world in terms of the impact you want to have, the legacy you want to leave, and the problems you want to solve. The exercise helps you find your purpose and meaning in life, beyond your personal preferences.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
