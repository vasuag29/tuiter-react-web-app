import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";

function exploreComponent() {
    $('#wd-home').append(`
    <div class="row mt-2">
        <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2
                    mx-auto">
            ${NavigationSidebar('home')}
        </div>
        <div class="col ps-1 pe-1 me-0">
            ${PostList()}
        </div>
         <div class="col-4
                    d-xxl-block d-xl-block d-lg-block d-md-none d-md-none d-sm-none">
            ${PostSummaryList()}
        </div>
  </div>

   `);
}

$(exploreComponent);