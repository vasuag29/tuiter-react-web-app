import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return (
        <div className="list-group">
            <li className="list-group-item">
                <b>Who to follow</b>
            </li>
            {
                whoArray.map(who =>
                                 <WhoToFollowListItem
                                     key={who._id}
                                     who={who}/>
                )

            }
        </div>
    );
}

export default WhoToFollowList;