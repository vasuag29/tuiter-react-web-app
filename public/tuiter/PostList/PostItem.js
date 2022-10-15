const PostItem = (post) => {
    return (`
    <li class="list-group-item pt-3 wd-post-list-item">
        <div class="row">
            <div class="col-1 me-3">
            <img src="${post.userImage}" 
                width="50px" height="50px" 
                class="rounded-circle"/>
            </div>
            <div class="col me-2">
                <div class="wd-post-header">
                    <a href="#"
                       class="list-group-item-action
                       fw-bold
                       text-decoration-none">
                        ${post.userName}
                    </a>
                    <i class="fa-solid fa-circle-check"></i>
                    <span class="text-secondary">@${post.handle}</span>
                    <span class="text-secondary"> &#xb7; ${post.time}</span>
                    <a class="float-end" href="#">
                        <i class="fa-solid fa-ellipsis text-secondary"></i>
                    </a>
                    <br/>
                    <p>
                        ${post.title}
                    </p>
                </div>
                <div class="row">
                    <div class="card wd-post-card ps-0 pe-0">
                        <img class="card-img-top
                        ${post.image_title ?
                        'rounded-top-4' : 'rounded-4'}" 
                        src="${post.image}" alt="Post image">
                        <div class="card-body
                        ${post.image_title && post.image_description ? 
                          '' : 'd-none'}">
                            <h6 class="card-title
                            ${post.image_title ? '' : 'd-none'}">
                            ${post.image_title}
                            </h6>
                            <div class="card-text text-secondary
                            ${post.image_description ? '' : 'd-none'}">
                            ${post.image_description}
                            </div>
                            <a class="text-decoration-none text-secondary
                            ${post.image_link ? '' : 'd-none'}" 
                            href="http://${post.image_link}"
                            target="_blank"
                            rel="noopener noreferrer"">
                                <i class="fa-solid fa-link"></i>
                                <span>${post.image_link}</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col me-1">
                        <a class="text-decoration-none text-secondary" href="#">
                            <i class="fa-regular fa-comment me-2"></i>
                            <span>${post.comments}</span>
                        </a>
                    </div>
                    <div class="col me-1">
                        <a class="text-decoration-none text-secondary" href="#">
                            <i class="fa-solid fa-retweet me-2"></i>
                            <span>${post.retuits}</span>
                        </a>
                    </div>
                    <div class="col me-1">
                        <a class="text-decoration-none text-secondary" href="#">
                            <i class="fa-regular fa-heart me-2"></i>
                            <span>${post.likes}</span>
                        </a>
                    </div>
                    <div class="col me-1">
                        <a class="text-decoration-none text-secondary ps-2" href="#">
                            <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </li> 
    `)
}

export default PostItem;