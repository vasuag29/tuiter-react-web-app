import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
           <div class="list-group">
           <li class="list-group-item">
                    <b>Who to follow</b>
                </li>
           ${who.map(item => {
               return(WhoToFollowListItem(item));
                }).join('')
            }
           </div>
    `);
}

export default WhoToFollowList;
