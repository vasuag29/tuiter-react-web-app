import React from "react";
import {useSelector} from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    let birthDate = new Date(profile.dateOfBirth);
    let splittedDate = birthDate.toDateString()
        .split(" ");
    splittedDate.splice(0, 1);
    birthDate = splittedDate.join(" ");
    return (
        <>
            <div className="position-relative">
                <img src={profile.bannerPicture}
                     width="100%" height="280px"/>
                <img src={profile.profilePicture}
                     className="wd-img-profile
                     position-absolute rounded-circle float-start"
                     width={125} height={125}/>
            </div>
            <div className="mb-5">
                <Link to="/tuiter/edit-profile">
                    <button className="btn btn-light fw-bold rounded-pill float-end
                 mt-2 me-3">
                        Edit Profile
                    </button>
                </Link>
            </div>
            <div className="pt-5 ps-3">
                <h4 className="fw-bold mb-0">{profile.firstName} {profile.lastName}</h4>
                <h6 className="text-secondary">@{profile.handle}</h6>
                <p className="mb-2">
                    {profile.bio}
                    <br/>
                    <a className="text-secondary">
                        {profile.website}
                    </a>
                </p>
                <div className="row">
                    <div className="col-3 text-secondary">
                        <i className="fa-solid fa-location-dot me-1"></i>
                        <span>{profile.location}</span>
                    </div>
                    <div className="col-4 text-secondary">
                        <i className="fa-solid fa-cake-candles me-1"></i>
                        <span>Born {birthDate}</span>
                    </div>
                    <div className="col text-secondary">
                        <i className="fa-regular fa-calendar-days me-1"></i>
                        <span>Joined {profile.dateJoined}</span>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-2">
                        <span className="fw-bold me-1">{profile.followingCount}</span>
                        <span className="text-secondary">Following</span>
                    </div>
                    <div className="col-2">
                        <span className="fw-bold me-1">{profile.followersCount}</span>
                        <span className="text-secondary">Followers</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileComponent;