import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div class="topbar d-none d-sm-block">
        <div class="container ">
          <div class="row">
            <div class="col-sm-12 col-md-5">
              <div class="topbar-left">
                <div class="topbar-text">Monday, March 22, 2020</div>
              </div>
            </div>
            <div class="col-sm-12 col-md-7">
              <div class="list-unstyled topbar-right">
                <ul class="topbar-link">
                  <li>
                    <a href="#" title="">
                      Career
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Login / Register
                    </a>
                  </li>
                </ul>
                <ul class="topbar-sosmed">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END NAVBAR TOP --> */}
      <div class="navbar navbar-hover navbar-expand-lg navbar-soft">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="images/logo-blue-stiky.png" alt="" class="img-fluid" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav99"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="main_nav99">
            <ul class="navbar-nav  mx-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  {" "}
                  Pages{" "}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact.html">
                  {" "}
                  contact{" "}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact.html">
                  {" "}
                  contact{" "}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact.html">
                  {" "}
                  contact{" "}
                </a>
              </li>
            </ul>

            {/* <!-- Search bar.// --> */}
            <ul class="navbar-nav">
              <li>
              {/* <Link class="btn btn-primary text-capitalize" to="/about"><i class="fa fa-plus-circle mr-1"></i> About</Link> */}

                <a href="#" class="btn btn-primary text-capitalize">
                  <i class="fa fa-plus-circle mr-1"></i> add listing
                </a>
              </li>
            </ul>
            {/* <!-- Search content bar.// --> */}
            <div class="top-search navigation-shadow">
              <div class="container">
                <div class="input-group ">
                  <form action="#">
                    <div class="row no-gutters mt-3">
                      <div class="col">
                        <input
                          class="form-control border-secondary border-right-0 rounded-0"
                          type="search"
                          value=""
                          placeholder="Search "
                          id="example-search-input4"
                        />
                      </div>
                      <div class="col-auto">
                        <a
                          class="btn btn-outline-secondary border-left-0 rounded-0 rounded-right"
                          href="/search-result.html"
                        >
                          <i class="fa fa-search"></i>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- Search content bar.// --> */}

            {/* <!-- navbar-collapse.// --> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
