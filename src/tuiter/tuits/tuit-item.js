import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = (
    {
        tuit = {
            _id: 123,
            userName: 'Elon Musk',
            handle: "elonmusk",
            time: "23h",
            title: "Amazing show about @Inspiration4x mission!",
            userImage: "../../images/image_elonmusk.jpeg",
            image: "../../images/image_inspiration4.jpeg",
            image_title: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            image_description: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space",
            image_link: "netflix.com",
            liked: "true",
            replies: "4.2K",
            retuits: "3.5K",
            likes: "37.5K"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <>
            <li className="list-group-item pt-3 wd-post-list-item">
                <div className="row">
                    <div className="col-1 me-3">
                        <img src={tuit.userImage}
                             className="wd-post-user-img rounded-circle"/>
                    </div>
                    <div className="col me-2">
                        <div className="wd-post-header">
                            <a href="#"
                               className="list-group-item-action
                       fw-bold
                       text-decoration-none">
                                {tuit.userName}
                            </a>
                            <i className="fa-solid fa-circle-check ms-1 me-1"></i>
                            <span className="text-secondary">@{tuit.handle}</span>
                            <span className="text-secondary"> &#xb7; {tuit.time}</span>
                            <a className="float-end"
                               onClick={() => deleteTuitHandler(tuit._id)}>
                                <i className="fa-solid fa-xmark text-secondary"></i>
                            </a>
                            <br/>
                            <p>
                                {tuit.title}
                            </p>
                        </div>
                        {tuit.image &&
                         <div className="row">
                             <div className="card wd-post-card ps-0 pe-0">
                                 <img className={`card-img-top
                                    ${tuit.image_title ?
                                      'rounded-top-4' : 'rounded-4'}`}
                                      src={tuit.image} alt="Post image"/>
                                 <div className={`card-body
                        ${tuit.image_title && tuit.image_description ?
                          '' : 'd-none'}`}>
                                     <h6 className={`card-title
                            ${tuit.image_title ? '' : 'd-none'}`}>
                                         {tuit.image_title}
                                     </h6>
                                     <div className={`card-text text-secondary
                            ${tuit.image_description ? '' : 'd-none'}`}>
                                         {tuit.image_description}
                                     </div>
                                     <a className={`text-decoration-none text-secondary
                            ${tuit.image_link ? '' : 'd-none'}`}
                                        href={`http://${tuit.image_link}`}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                         <i className=" fa-solid fa-link"></i>
                                         <span>{tuit.image_link}</span>
                                     </a>
                                 </div>
                             </div>
                         </div>
                        }
                        <TuitStats key={tuit._id} tuit={tuit}/>
                    </div>
                </div>
            </li>
        </>
    );
};

export default TuitItem;