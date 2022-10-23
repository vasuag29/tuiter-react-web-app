import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import "./index.css";
import ExploreComponent from "./explore";
import {Route, Routes} from "react-router";
import HomeComponent from "./home";

const Tuiter = () => {
    return (
        <div className="row mt-2">
            <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2
                    mx-auto">
                <NavigationSidebar/>
            </div>
            <div className="col ps-0 pe-0">
                <Routes>
                    <Route path="home" element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="col-4
                    d-xxl-block d-xl-block d-lg-block d-md-none d-md-none d-sm-none">
                <WhoToFollowList/>
            </div>
        </div>
    )
}

export default Tuiter;