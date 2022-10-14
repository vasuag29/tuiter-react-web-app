import exploreItems from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

function PostSummaryList() {
    return(`
    <div class="list-group mb-3 pe-0">
        ${exploreItems.map(item => {
        return(PostSummaryItem(item));
        }).join('')
    }
    </div>
    `)
}

export default PostSummaryList;