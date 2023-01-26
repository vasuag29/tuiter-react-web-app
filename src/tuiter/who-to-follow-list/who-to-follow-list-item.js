import React from "react";

const WhoToFollowListItem = (
    {
        who = {_id: 456, userName: 'NASA', handle: 'NASA', avatarIcon: '../../images/image_nasa.jpg'}
    }
) => {
    return (
        <li className="list-group-item wd-suggestions-row-item">
            <div className="row">
                <div className="col-2 align-self-center">
                    <img className="wd-suggestion-image rounded-circle"
                         src={who.avatarIcon}/>
                </div>
                <div className="col ms-2 wd-recommendation-content">
                    <a href="#"
                       className="list-group-item-action text-dark text-decoration-none">
                        <b>{who.userName}</b>
                    </a>
                    <i className="fa-solid fa-circle-check"></i>
                    <br/>
                    <span className="text-secondary">@{who.handle}</span>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4
                        wd-follow-button
                        align-self-center">
                    <button type="button"
                            className="btn btn-primary rounded-pill">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;