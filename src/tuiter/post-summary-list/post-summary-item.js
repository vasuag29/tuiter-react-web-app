import React from "react";

const PostSummaryItem = (
    {
        post = {
            _id: 123,
            topic: 'Web Development',
            userName: 'ReactJS',
            time: "2h",
            title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
            image: '/images/image_react.png'
        }
    }
) => {
    return (
        <div className="list-group-item wd-content-list">
            <div className="row pe-2 wd-content-row">
                <div className="col pe-0 wd-explore-post-details">
                    <span className={`text-secondary
                    ${post.topic ? '' : 'd-none'}`}>
                    {post.topic}
                        <br/>
                    </span>
                    <a href="#"
                       className="list-group-item-action
                                  fw-bold text-dark
                                  text-decoration-none">
                        {post.userName}
                    </a>
                    <i className="fa-solid fa-circle-check"></i>
                    <span className="text-secondary"> - {post.time}</span>
                    <br/>
                    <p className="fw-bold text-dark">
                        {post.title}
                    </p>
                </div>
                <div className="col-2 align-self-center
                        me-xxl-1 me-xl-3 me-lg-3 me-md-2 me-sm-2">
                    <img className="wd-content-image rounded-3"
                         src={post.image}/>
                </div>
            </div>
        </div>
    );
};

export default PostSummaryItem;