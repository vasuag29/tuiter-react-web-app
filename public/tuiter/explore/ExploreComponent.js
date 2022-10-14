import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <!-- Search bar -->
            <div class="row">
                <div class="col ps-0 pe-0">
                    <div class="wd-search-bar bg-white rounded-pill">
                        <label class="wd-search-icon" for="wd-search-field">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </label>
                        <input type="search"
                               class="wd-search-field"
                               id="wd-search-field"
                               placeholder="Search Tuiter"/>
                    </div>
                </div>

                <div class="col-1 align-self-center
                            ps-xxl-4 ps-xl-4 ps-lg-3 ps-md-3 ps-sm-3">
                    <a href="#">
                        <i class="fa-solid fa-gear wd-settings-button"></i>
                    </a>
                </div>
            </div>

            <div class="row mt-2">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page"
                           href="for-you.html">
                            For you
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item
                                d-md-block d-sm-none">
                        <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>

            <!--            Main content-->
            <div class="row mt-2 wd-main-image position-relative">
                <img class="px-0" src="../../images/image_explore_main.webp" width="100%"/>
                <h1 class="position-absolute bottom-0 text-light">SpaceX's Starship</h1>
            </div>
            
           <div class="row">
           ${PostSummaryList()}
            </div>
    `);
}
export default ExploreComponent;
