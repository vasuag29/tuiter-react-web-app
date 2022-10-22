import React from "react";

const PostItem = (
    {
        post = {
            _id: 123,
            userName: 'Elon Musk',
            handle: "elonmusk",
            time: "23h",
            title: "Amazing show about @Inspiration4x mission!",
            userImage: "../../images/image_elonmusk.jpeg",
            image: "../../images/image_inspiration4.jpeg",
            image_title: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            image_description: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space",
            image_link: "netflix.com",
            comments: "4.2K",
            retuits: "3.5K",
            likes: "37.5K"
        }
    }
) => {
    return (
        <>
            <li className="list-group-item pt-3 wd-post-list-item">
                <div className="row">
                    <div className="col-1 me-3">
                        <img src={post.userImage}
                             className="wd-post-user-img rounded-circle"/>
                    </div>
                    <div className="col me-2">
                        <div className="wd-post-header">
                            <a href="#"
                               className="list-group-item-action
                       fw-bold
                       text-decoration-none">
                                {post.userName}
                            </a>
                            <i className="fa-solid fa-circle-check"></i>
                            <span className="text-secondary">@{post.handle}</span>
                            <span className="text-secondary"> &#xb7; {post.time}</span>
                            <a className="float-end" href="#">
                                <i className="fa-solid fa-ellipsis text-secondary"></i>
                            </a>
                            <br/>
                            <p>
                                {post.title}
                            </p>
                        </div>
                        <div className="row">
                            <div className="card wd-post-card ps-0 pe-0">
                                <img className={`card-img-top
                        ${post.image_title ?
                          'rounded-top-4' : 'rounded-4'}`}
                                     src={post.image} alt="Post image"/>
                                <div className={`card-body
                        ${post.image_title && post.image_description ?
                          '' : 'd-none'}`}>
                                    <h6 className={`card-title
                            ${post.image_title ? '' : 'd-none'}`}>
                                        {post.image_title}
                                    </h6>
                                    <div className={`card-text text-secondary
                            ${post.image_description ? '' : 'd-none'}`}>
                                        {post.image_description}
                                    </div>
                                    <a className={`text-decoration-none text-secondary
                            ${post.image_link ? '' : 'd-none'}`}
                                       href="http://${post.image_link}"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        <i className=" fa-solid fa-link"></i>
                                        <span>{post.image_link}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className=" row mt-3 wd-post-button-row">
                            <div className=" col me-1">
                                <a className=" text-decoration-none text-secondary" href="#">
                                    <i className="fa-regular fa-comment me-2"></i>
                                    <span>{post.comments}</span>
                                </a>
                            </div>
                            <div className="col me-1">
                                <a className="text-decoration-none text-secondary" href="#">
                                    <i className="fa-solid fa-retweet me-2"></i>
                                    <span>{post.retuits}</span>
                                </a>
                            </div>
                            <div className="col me-1">
                                <a className="text-decoration-none text-secondary" href="#">
                                    <i className="fa-regular fa-heart me-2"></i>
                                    <span>{post.likes}</span>
                                </a>
                            </div>
                            <div className="col me-1">
                                <a className="text-decoration-none text-secondary ps-2" href="#">
                                    <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};

export default PostItem;