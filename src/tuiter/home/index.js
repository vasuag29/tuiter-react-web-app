import React from "react";
import "../index.css";
import "../explore/index.css";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};

export default HomeComponent;