import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import "./index.css";
import ExploreComponent from "./explore";
import {Route, Routes} from "react-router";
import HomeComponent from "./home";
import {configureStore} from "@reduxjs/toolkit";
import whoReducer from "./reducers/who-reducer";
import {Provider} from "react-redux";
import tuitsReducer from "./tuits/tuits-reducer";
import postsReducer from "./reducers/post-summary-list-reducer";
import ProfileComponent from "./profile";
import profileReducer from "./profile/profile-reducer";
import EditProfileComponent from "./edit-profile";

const store = configureStore(
    {
        reducer: {
            who: whoReducer,
            posts: postsReducer,
            tuitsData: tuitsReducer,
            profile: profileReducer
        }
    });

const Tuiter = () => {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2
                    mx-auto">
                    <NavigationSidebar/>
                </div>
                <div className="col ps-0 pe-0">
                    <Routes>
                        <Route path="home" element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="edit-profile" element={<EditProfileComponent/>}/>
                    </Routes>
                </div>
                <div className="col-4
                    d-xxl-block d-xl-block d-lg-block d-md-none d-md-none d-sm-none">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    )
}

export default Tuiter;