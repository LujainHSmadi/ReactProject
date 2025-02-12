const Edit = () => {
  return (
    <>
      {/* <!-- Layout wrapper --> */}
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          {/* <!-- Menu --> */}

          <aside
            id="layout-menu"
            class="layout-menu menu-vertical menu bg-menu-theme"
          >
            <div class="app-brand demo">
              <a href="index.html" class="app-brand-link">
                <span class="app-brand-logo demo"></span>
                <span class="app-brand-text demo menu-text fw-bolder ms-2">
                  Sneat
                </span>
              </a>

              <a
                href="javascript:void(0);"
                class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
              >
                <i class="bx bx-chevron-left bx-sm align-middle"></i>
              </a>
            </div>

            <div class="menu-inner-shadow"></div>

            <ul class="menu-inner py-1">
              {/* <!-- Dashboard --> */}
              <li class="menu-item">
                <a href="index.html" class="menu-link">
                  <i class="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Analytics">Dashboard</div>
                </a>
              </li>

              {/* <!-- Layouts --> */}
              <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-layout"></i>
                  <div data-i18n="Layouts">Layouts</div>
                </a>

                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="layouts-without-menu.html" class="menu-link">
                      <div data-i18n="Without menu">Without menu</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-without-navbar.html" class="menu-link">
                      <div data-i18n="Without navbar">Without navbar</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-container.html" class="menu-link">
                      <div data-i18n="Container">Container</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-fluid.html" class="menu-link">
                      <div data-i18n="Fluid">Fluid</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="layouts-blank.html" class="menu-link">
                      <div data-i18n="Blank">Blank</div>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="menu-header small text-uppercase">
                <span class="menu-header-text">Pages</span>
              </li>
              <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-dock-top"></i>
                  <div data-i18n="Account Settings">Account Settings</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a
                      href="pages-account-settings-account.html"
                      class="menu-link"
                    >
                      <div data-i18n="Account">Account</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="pages-account-settings-notifications.html"
                      class="menu-link"
                    >
                      <div data-i18n="Notifications">Notifications</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="pages-account-settings-connections.html"
                      class="menu-link"
                    >
                      <div data-i18n="Connections">Connections</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-lock-open-alt"></i>
                  <div data-i18n="Authentications">Authentications</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a
                      href="auth-login-basic.html"
                      class="menu-link"
                      target="_blank"
                    >
                      <div data-i18n="Basic">Login</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="auth-register-basic.html"
                      class="menu-link"
                      target="_blank"
                    >
                      <div data-i18n="Basic">Register</div>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a
                      href="auth-forgot-password-basic.html"
                      class="menu-link"
                      target="_blank"
                    >
                      <div data-i18n="Basic">Forgot Password</div>
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!-- Forms & Tables --> */}
              <li class="menu-header small text-uppercase">
                <span class="menu-header-text">Forms &amp; Tables</span>
              </li>
              {/* <!-- Forms --> */}
              <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-detail"></i>
                  <div data-i18n="Form Elements">Posts</div>
                </a>
              </li>
              <li class="menu-item active open">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-detail"></i>
                  <div data-i18n="Form Layouts">Posts</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="/table" class="menu-link">
                      <i class="menu-icon tf-icons bx bx-table"></i>
                      <div data-i18n="Tables">Tables</div>
                    </a>
                  </li>
                  <li class="menu-item active">
                    <a href="/create" class="menu-link">
                      <div data-i18n="Horizontal Form">create</div>
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!-- Forms & Tables -->
              <li class="menu-header small text-uppercase">
                <span class="menu-header-text">Forms &amp; Tables</span>
              </li> */}
              {/* <!-- Forms --> */}
              <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-detail"></i>
                  <div data-i18n="Form Elements">User</div>
                </a>
              </li>
              <li class="menu-item active open">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                  <i class="menu-icon tf-icons bx bx-detail"></i>
                  <div data-i18n="Form Layouts">User</div>
                </a>
                <ul class="menu-sub">
                  <li class="menu-item">
                    <a href="/table" class="menu-link">
                      <i class="menu-icon tf-icons bx bx-table"></i>
                      <div data-i18n="Tables">Tables</div>
                    </a>
                  </li>
                  <li class="menu-item active">
                    <a href="/create" class="menu-link">
                      <div data-i18n="Horizontal Form">create</div>
                    </a>
                  </li>
                </ul>
              </li>
              {/* <!-- Misc --> */}
              <li class="menu-header small text-uppercase">
                <span class="menu-header-text">Misc</span>
              </li>
              <li class="menu-item">
                <a
                  href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                  target="_blank"
                  class="menu-link"
                >
                  <i class="menu-icon tf-icons bx bx-support"></i>
                  <div data-i18n="Support">Support</div>
                </a>
              </li>
              <li class="menu-item">
                <a
                  href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                  target="_blank"
                  class="menu-link"
                >
                  <i class="menu-icon tf-icons bx bx-file"></i>
                  <div data-i18n="Documentation">Documentation</div>
                </a>
              </li>
            </ul>
          </aside>
          {/* <!-- / Menu -->


        <!-- Layout container --> */}
          <div class="layout-page">
            {/* <!-- Navbar --> */}

            {/* <!-- / Navbar --> */}

            {/* <!-- Content wrapper --> */}
            <div class="content-wrapper">
              {/* <!-- Content --> */}

              <div class="container-xxl flex-grow-1 container-p-y">
                <h4 class="fw-bold py-3 mb-4">
                  <span class="text-muted fw-light">Forms/</span> Horizontal
                  Layouts
                </h4>

                {/* <!-- Basic Layout & Basic with Icons --> */}
                <div class="row">
                  {/* <!-- Basic Layout --> */}
                  <div class="col-xxl">
                    <div class="card mb-4">
                      <div class="card-header d-flex align-items-center justify-content-between">
                        <h5 class="mb-0">Basic Layout</h5>
                        <small class="text-muted float-end">
                          Default label
                        </small>
                      </div>
                      <div class="card-body">
                        <form>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-name"
                            >
                              Name
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="text"
                                class="form-control"
                                id="basic-default-name"
                                placeholder="John Doe"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-company"
                            >
                              Company
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="text"
                                class="form-control"
                                id="basic-default-company"
                                placeholder="ACME Inc."
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-email"
                            >
                              Email
                            </label>
                            <div class="col-sm-10">
                              <div class="input-group input-group-merge">
                                <input
                                  type="text"
                                  id="basic-default-email"
                                  class="form-control"
                                  placeholder="john.doe"
                                  aria-label="john.doe"
                                  aria-describedby="basic-default-email2"
                                />
                                <span
                                  class="input-group-text"
                                  id="basic-default-email2"
                                >
                                  @example.com
                                </span>
                              </div>
                              <div class="form-text">
                                You can use letters, numbers & periods
                              </div>
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-phone"
                            >
                              Phone No
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="text"
                                id="basic-default-phone"
                                class="form-control phone-mask"
                                placeholder="658 799 8941"
                                aria-label="658 799 8941"
                                aria-describedby="basic-default-phone"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-message"
                            >
                              Message
                            </label>
                            <div class="col-sm-10">
                              <textarea
                                id="basic-default-message"
                                class="form-control"
                                placeholder="Hi, Do you have a moment to talk Joe?"
                                aria-label="Hi, Do you have a moment to talk Joe?"
                                aria-describedby="basic-icon-default-message2"
                              ></textarea>
                            </div>
                          </div>
                          <div class="row justify-content-end">
                            <div class="col-sm-10">
                              <button type="submit" class="btn btn-primary">
                                Send
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Basic with Icons --> */}
                  <div class="col-xxl">
                    <div class="card mb-4">
                      <div class="card-header d-flex align-items-center justify-content-between">
                        <h5 class="mb-0">Basic with Icons</h5>
                        <small class="text-muted float-end">
                          Merged input group
                        </small>
                      </div>
                      <div class="card-body">
                        <form>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-icon-default-fullname"
                            >
                              Name
                            </label>
                            <div class="col-sm-10">
                              <div class="input-group input-group-merge">
                                <span
                                  id="basic-icon-default-fullname2"
                                  class="input-group-text"
                                >
                                  <i class="bx bx-user"></i>
                                </span>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="basic-icon-default-fullname"
                                  placeholder="John Doe"
                                  aria-label="John Doe"
                                  aria-describedby="basic-icon-default-fullname2"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-icon-default-company"
                            >
                              Company
                            </label>
                            <div class="col-sm-10">
                              <div class="input-group input-group-merge">
                                <span
                                  id="basic-icon-default-company2"
                                  class="input-group-text"
                                >
                                  <i class="bx bx-buildings"></i>
                                </span>
                                <input
                                  type="text"
                                  id="basic-icon-default-company"
                                  class="form-control"
                                  placeholder="ACME Inc."
                                  aria-label="ACME Inc."
                                  aria-describedby="basic-icon-default-company2"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-icon-default-email"
                            >
                              Email
                            </label>
                            <div class="col-sm-10">
                              <div class="input-group input-group-merge">
                                <span class="input-group-text">
                                  <i class="bx bx-envelope"></i>
                                </span>
                                <input
                                  type="text"
                                  id="basic-icon-default-email"
                                  class="form-control"
                                  placeholder="john.doe"
                                  aria-label="john.doe"
                                  aria-describedby="basic-icon-default-email2"
                                />
                                <span
                                  id="basic-icon-default-email2"
                                  class="input-group-text"
                                >
                                  @example.com
                                </span>
                              </div>
                              <div class="form-text">
                                You can use letters, numbers & periods
                              </div>
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 form-label"
                              for="basic-icon-default-phone"
                            >
                              Phone No
                            </label>
                            <div class="col-sm-10">
                              <div class="input-group input-group-merge">
                                <span
                                  id="basic-icon-default-phone2"
                                  class="input-group-text"
                                >
                                  <i class="bx bx-phone"></i>
                                </span>
                                <input
                                  type="text"
                                  id="basic-icon-default-phone"
                                  class="form-control phone-mask"
                                  placeholder="658 799 8941"
                                  aria-label="658 799 8941"
                                  aria-describedby="basic-icon-default-phone2"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 form-label"
                              for="basic-icon-default-message"
                            >
                              Message
                            </label>
                            <div class="col-sm-10">
                              <div class="input-group input-group-merge">
                                <span
                                  id="basic-icon-default-message2"
                                  class="input-group-text"
                                >
                                  <i class="bx bx-comment"></i>
                                </span>
                                <textarea
                                  id="basic-icon-default-message"
                                  class="form-control"
                                  placeholder="Hi, Do you have a moment to talk Joe?"
                                  aria-label="Hi, Do you have a moment to talk Joe?"
                                  aria-describedby="basic-icon-default-message2"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <div class="row justify-content-end">
                            <div class="col-sm-10">
                              <button type="submit" class="btn btn-primary">
                                Send
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- / Content -->

            <!-- Footer --> */}
              <footer class="content-footer footer bg-footer-theme">
                <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                  <div class="mb-2 mb-md-0">
                    ©<script>document.write(new Date().getFullYear());</script>,
                    made with ❤️ by
                    <a
                      href="https://themeselection.com"
                      target="_blank"
                      class="footer-link fw-bolder"
                    >
                      ThemeSelection
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://themeselection.com/license/"
                      class="footer-link me-4"
                      target="_blank"
                    >
                      License
                    </a>
                    <a
                      href="https://themeselection.com/"
                      target="_blank"
                      class="footer-link me-4"
                    >
                      More Themes
                    </a>

                    <a
                      href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                      target="_blank"
                      class="footer-link me-4"
                    >
                      Documentation
                    </a>

                    <a
                      href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                      target="_blank"
                      class="footer-link me-4"
                    >
                      Support
                    </a>
                  </div>
                </div>
              </footer>
              {/* <!-- / Footer --> */}

              <div class="content-backdrop fade"></div>
            </div>
            {/* <!-- Content wrapper --> */}
          </div>
          {/* <!-- / Layout page --> */}
        </div>

        {/* <!-- Overlay --> */}
        <div class="layout-overlay layout-menu-toggle"></div>
      </div>
      {/* <!-- / Layout wrapper --> */}
    </>
  );
};
export default Edit;
