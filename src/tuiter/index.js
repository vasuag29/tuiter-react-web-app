import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import "./index.css";
import ExploreComponent from "./explore";

const Tuiter = () => {
    return (
        <div className="row mt-2">
            <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2
                    mx-auto">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col ms-2 me-2">
                <ExploreComponent/>
            </div>
            <div className="col-4
                    d-xxl-block d-xl-block d-lg-block d-md-none d-md-none d-sm-none">
                <WhoToFollowList/>
            </div>
        </div>
    )
}

export default Tuiter;