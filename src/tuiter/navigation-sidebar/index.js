import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];
    return (
        <>
            <div className="list-group mb-2 wd-left-sidebar mx-auto">
                <a href="#"
                   className="list-group-item list-group-item-action">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <Link to="/tuiter/home"
                      className={`list-group-item list-group-item-action
                   ${active.toLowerCase() === 'home' ? 'active' : ''}`}>
                    <div className="row">
                        <i className="col-1 fa-solid fa-house align-self-center"></i>
                        <span
                            className="col d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs">
                            Home
                        </span>
                    </div>
                </Link>
                <Link to="/tuiter/explore"
                      className={`list-group-item list-group-item-action
                   ${active.toLowerCase() === 'explore' ? 'active' : ''}`}>
                    <div className="row">
                        <i className="col-1 fa-solid fa-hashtag align-self-center"></i>
                        <span
                            className="col d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs">
                            Explore
                        </span>
                    </div>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <span
                        className="col d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs">
                            Labs
                    </span>
                </Link>
                <a href="#"
                   className={`list-group-item list-group-item-action
                   ${active.toLowerCase() === 'notifications' ? 'active' : ''}`}>
                    <div className="row">
                        <i className="col-1 fa-solid fa-bell align-self-center"></i>
                        <span
                            className="col d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs">
                            Notifications
                        </span>
                    </div>
                </a>
                <a href="#"
                   className={`list-group-item list-group-item-action
                   ${active.toLowerCase() === 'messages' ? 'active' : ''}`}>
                    <div className="row">
                        <i className="col-1 fa-solid fa-envelope align-self-center"></i>
                        <span
                            className="col d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs">
                            Messages
                        </span>
                    </div>
                </a>
                <a href="#"
                   className={`list-group-item list-group-item-action
                   ${active.toLowerCase() === 'bookmarks' ? 'active' : ''}`}>
                    <div className="row">
                        <i className="col-1 fa-solid fa-bookmark align-self-center"></i>
                        <span
                            className="col d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs">
                            Bookmarks
                        </span>
                    </div>
                </a>
                <a href="#"
                   className={`list-group-item list-group-item-action
                   ${active.toLowerCase() === 'lists' ? 'active' : ''}`}>
                    <div className="row">
                        <i className="col-1 fa-solid fa-list align-self-center"></i>
                        <span
                            className="col d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs">
                            Lists
                        </span>
                    </div>
                </a>
                <Link to="/tuiter/profile"
                   className={`list-group-item list-group-item-action
                   ${active.toLowerCase() === 'profile' ? 'active' : ''}`}>
                    <div className="row">
                        <i className="col-1 fa-solid fa-user align-self-center"></i>
                        <span className="col
                                    d-xxl-block d-xl-block
                                    d-lg-none d-md-none d-sm-none d-xs">
                            Profile
                        </span>
                    </div>
                </Link>
                <a href="#"
                   className={`list-group-item list-group-item-action
                   ${active.toLowerCase() === 'more' ? 'active' : ''}`}>
                    <div className="row">
                        <span className="col-1 fa-stack small fa-1x align-self-center">
                            <i className="fa-regular fa-circle fa-stack-2x"></i>
                            <i className="fa-solid fa-ellipsis fa-stack-1x"></i>
                        </span>
                        <span
                            className="col d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs">
                            More
                        </span>
                    </div>
                </a>

            </div>

            <div className="d-grid gap-2">
                <button className="btn btn-primary rounded-pill" type="button">Tuit</button>
            </div>
        </>
    );

};

export default NavigationSidebar;