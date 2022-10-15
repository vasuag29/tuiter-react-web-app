function PostSummaryItem(post) {
    return (`
    <div class="list-group-item wd-content-list">
        <div class="row pe-2 wd-content-row">
            <div class="col pe-0 wd-explore-post-details">
                <span class="text-secondary
                ${post.topic ? '' : 'd-none'}">
                ${post.topic}
                <br/>
                </span>
                <a href="#"
                   class="list-group-item-action
                   fw-bold
                   text-decoration-none">
                    ${post.userName}
                </a>
                <i class="fa-solid fa-circle-check"></i>
                <span class="text-secondary"> - ${post.time}</span>
                <br/>
                <p class="fw-bold">
                    ${post.title}
                </p>
            </div>
            <div class="col-2 align-self-center
                        me-xxl-1 me-xl-3 me-lg-3 me-md-2 me-sm-2">
                <img class="wd-content-image rounded-3"
                     src=${post.image}>
            </div>
        </div>
    </div>
    `)
}

export default PostSummaryItem;