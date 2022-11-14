import {useDispatch} from "react-redux";
import {likeTuitToggle} from "./tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
    {
        tuit = {
            liked: "true",
            replies: "4.2K",
            retuits: "3.5K",
            likes: "37.5K"
        }
    }
) => {
    const dispatch = useDispatch();
    const toggleLike = (tuit) => {
        dispatch(likeTuitToggle(tuit))
    }

    return (
        <div className=" row mt-3 wd-post-button-row">
            <div className=" col me-1">
                <a className=" text-decoration-none text-secondary" href="#">
                    <i className="fa-regular fa-comment me-2"></i>
                    <span>{tuit.replies}</span>
                </a>
            </div>
            <div className="col me-1">
                <a className="text-decoration-none text-secondary" href="#">
                    <i className="fa-solid fa-retweet me-2"></i>
                    <span>{tuit.retuits}</span>
                </a>
            </div>
            <div className="col me-1">
                <a className={`text-decoration-none text-secondary
                ${tuit.liked ? 'text-danger' : ''}
                `}
                   onClick={() => {
                       dispatch(updateTuitThunk({
                                                    ...tuit,
                                                    likes: tuit.likes + 1
                                                }))
                   }}>
                    <i className={`${tuit.liked ? 'fa-solid' : 'fa-regular'} 
                    fa-heart me-2`}></i>
                    <span>{tuit.likes}</span>
                </a>
            </div>
            <div className="col me-1">
                <a className="text-decoration-none text-secondary"
                   onClick={() => {
                       dispatch(updateTuitThunk({
                                                    ...tuit,
                                                    dislikes: tuit.dislikes + 1
                                                }))
                   }}>
                    <i className="fa-regular fa-thumbs-down me-2"></i>
                    <span>{tuit.dislikes}</span>
                </a>
            </div>
            <div className="col me-1">
                <a className="text-decoration-none text-secondary ps-2" href="#">
                    <i className="fa-solid fa-share-nodes"></i>
                </a>
            </div>
        </div>
    );
};

export default TuitStats;