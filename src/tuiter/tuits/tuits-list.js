import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import TuitStats from "./tuit-stats";

const TuitsList = () => {
    const tuits = useSelector(state => state.tuits);
    return (
        <>
            <ul className="list-group mb-3 ps-0 pe-0">
                {
                    tuits.map(tuitItem =>
                                  <TuitItem key={tuitItem._id} tuit={tuitItem}/>
                    )
                }
            </ul>
        </>
    );
};

export default TuitsList;