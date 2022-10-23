import React from "react";
import PostItem from "./post-item";
import homeScreenPosts from "./posts.json";
import "../index.css";
import "../explore/index.css";

const HomeComponent = () => {
    return (
        <>
            <ul className="list-group mb-3 ps-0 pe-0">
                {
                    homeScreenPosts.map(postItem =>
                        <PostItem key={postItem._id} post={postItem}/>
                    )
                }
            </ul>
        </>
    );
};

export default HomeComponent;