import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
    <div class="row mt-2">
        <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2
                    mx-auto">
            ${NavigationSidebar()}
        </div>
        <div class="col align-content-center ms-2 me-2">
            ${ExploreComponent()}
        </div>
         <div class="col-4
                    d-xxl-block d-xl-block d-lg-block d-md-none d-md-none d-sm-none">
            ${WhoToFollowList()}
        </div>
  </div>

   `);
}

$(exploreComponent);