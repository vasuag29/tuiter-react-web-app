const NavigationSidebar = () => {
    return (`
            <div class="list-group mb-2 wd-left-sidebar mx-auto">
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <div class="row">
                        <i class="col-1 fa-solid fa-house align-self-center"></i>
                        <span class="col d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs">
                            Home
                        </span>
                    </div>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action active">
                    <div class="row">
                        <i class="col-1 fa-solid fa-hashtag align-self-center"></i>
                        <span class="col d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs">
                            Explore
                        </span>
                    </div>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <div class="row">
                        <i class="col-1 fa-solid fa-bell align-self-center"></i>
                        <span class="col d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs">
                            Notifications
                        </span>
                    </div>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <div class="row">
                        <i class="col-1 fa-solid fa-envelope align-self-center"></i>
                        <span class="col d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs">
                            Messages
                        </span>
                    </div>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <div class="row">
                        <i class="col-1 fa-solid fa-bookmark align-self-center"></i>
                        <span class="col d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs">
                            Bookmarks
                        </span>
                    </div>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <div class="row">
                        <i class="col-1 fa-solid fa-list align-self-center"></i>
                        <span class="col d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs">
                            Lists
                        </span>
                    </div>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <div class="row">
                        <i class="col-1 fa-solid fa-user align-self-center"></i>
                        <span class="col
                                    d-xxl-block d-xl-block
                                    d-lg-none d-md-none d-sm-none d-xs">
                            Profile
                        </span>
                    </div>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <div class="row">
                        <span class="col-1 fa-stack small fa-1x align-self-center">
                            <i class="fa-regular fa-circle fa-stack-2x"></i>
                            <i class="fa-solid fa-ellipsis fa-stack-1x"></i>
                        </span>
                        <span class="col d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs">
                            More
                        </span>
                    </div>
                </a>
                
            </div>

            <div class="d-grid gap-2">
                <button class="btn btn-primary rounded-pill" type="button">Tuit</button>
            </div>`)
}

export default NavigationSidebar;
