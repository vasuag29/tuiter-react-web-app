import React from "react";
import PostSummaryItem from "./post-summary-item";
import postsArray from "./posts.json";

const PostSummaryList = () => {
    return (
        <div className="list-group mb-3 pe-0">
            {
                postsArray.map(postItem =>
                   <PostSummaryItem
                       key={postItem._id} post={postItem}/>)
            }
        </div>
    );
};

export default PostSummaryList;