import React from "react";
import "./index.css";
import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
    return (
        <div className="ms-3 me-3">
            <div className="row">
                <div className="col ps-0 pe-0">
                    <div className="wd-search-bar bg-white rounded-pill">
                        <label className="wd-search-icon" htmlFor="wd-search-field">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </label>
                        <input type="search"
                               className="wd-search-field"
                               id="wd-search-field"
                               placeholder="Search Tuiter"/>
                    </div>
                </div>

                <div className="col-1 align-self-center
                            ps-xxl-4 ps-xl-4 ps-lg-3 ps-md-3 ps-sm-3">
                    <a href="#">
                        <i className="fa-solid fa-gear wd-settings-button"></i>
                    </a>
                </div>
            </div>

            <div className="row mt-2">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page"
                           href="for-you.html">
                            For you
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="news.html">News</a>
                    </li>
                    <li className="nav-item
                                d-md-block d-sm-none">
                        <a className="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>

            <div className="row mt-2 wd-main-image position-relative">
                <img className="px-0" src="../../images/image_explore_main.webp" width="100%"/>
                <h1 className="position-absolute bottom-0 text-light">SpaceX's Starship</h1>
            </div>

            <div className="row">
                <PostSummaryList/>
            </div>
        </div>
    );
};

export default ExploreComponent;