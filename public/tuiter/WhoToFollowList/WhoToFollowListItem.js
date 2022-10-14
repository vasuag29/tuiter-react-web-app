function WhoToFollowListItem(who) {
    return (`
    <li class="list-group-item wd-suggestions-row-item">
        <div class="row">
            <div class="col-2 align-self-center">
                <img class="wd-suggestion-image rounded-circle"
                     src=${who.avatarIcon}>
            </div>
            <div class="col ms-2 wd-recommendation-content">
                <a href="#"
                   class="list-group-item-action text-decoration-none">
                    <b>${who.userName}</b>
                </a>
                <i class="fa-solid fa-circle-check"></i>
                <br/>
                <span>@${who.handle}</span>
            </div>
            <div class="col-xxl-3 col-xl-4 col-lg-4
                        wd-follow-button
                        align-self-center">
                <button type="button"
                        class="btn btn-primary rounded-pill">
                    Follow
                </button>
            </div>
        </div>
    </li>
    `);
}

export default WhoToFollowListItem;