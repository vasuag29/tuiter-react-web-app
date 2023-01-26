import homeScreenPosts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = (post) => {
    return (`
    <ul class="list-group mb-3 ps-0 pe-0">
        ${homeScreenPosts.map(item => {
        return(PostItem(item));
    }).join('')
    }
    </ul>
    `)
}

export default PostList;