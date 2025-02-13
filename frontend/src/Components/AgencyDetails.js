const AgencyDetails =()=>{
    return (
      <>
        <div class="bg-theme-overlay">
          <section class="section__breadcrumb ">
            <div class="container">
              <div class="row d-flex justify-content-center">
                <div class="col-md-8 text-center">
                  <h2 class="text-capitalize text-white">about us</h2>
                  <ul class="list-inline ">
                    <li class="list-inline-item">
                      <a href="#" class="text-white">
                        home
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="text-white">
                        page
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="text-white">
                        about us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- END BREADCRUMB --> */}

        <div class="clearfix"></div>

        <div class="bg-theme-overlay">
          <section class="section__breadcrumb ">
            <div class="container">
              <div class="row d-flex justify-content-center">
                <div class="col-md-8 text-center">
                  <h2 class="text-capitalize text-white ">agency detail</h2>
                  <ul class="list-inline ">
                    <li class="list-inline-item">
                      <a href="#" class="text-white">
                        home
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="text-white">
                        agency
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="text-white">
                        agency detail
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- END BREADCRUMB --> */}

        <div class="clearfix"></div>

        {/* <!-- LISTING LIST --> */}
        <section class="profile__agents">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="row no-gutters">
                  <div class="col-lg-12 cards mt-0">
                    <div class="row">
                      <div class="col-md-6 col-lg-6">
                        <a href="#" class="profile__agency-logo">
                          <img
                            src="images/500x400.jpg"
                            alt=""
                            class="img-fluid"
                          />
                          <div class="total__property-agent">20 listing</div>
                        </a>
                      </div>
                      <div class="col-md-6 col-lg-6 my-auto">
                        <div class="profile__agency-info">
                          <h5 class="text-capitalize">
                            <a href="#" target="_blank">
                              real estate company
                            </a>
                          </h5>
                          <p class="text-capitalize mb-1">
                            Los Angeles, city, United States of America
                          </p>

                          <ul class="list-unstyled mt-2">
                            <li>
                              <a href="#" class="text-capitalize">
                                <span>
                                  <i class="fa fa-building"></i>
                                  office :
                                </span>{" "}
                                123 456 789
                              </a>
                            </li>
                            <li>
                              <a href="#" class="text-capitalize">
                                <span>
                                  <i class="fa fa-phone"></i>
                                  mobile :
                                </span>{" "}
                                123 456 789
                              </a>
                            </li>
                            <li>
                              <a href="#" class="text-capitalize">
                                <span>
                                  <i class="fa fa-fax"></i> fax :{" "}
                                </span>{" "}
                                342 655
                              </a>
                            </li>
                            <li>
                              <a href="#" class="text-capitalize">
                                <span>
                                  <i class="fa fa-envelope"></i>
                                  email :
                                </span>
                                agents@property.com
                              </a>
                            </li>
                          </ul>
                          <p class="mb-0 mt-3">
                            <button class="btn btn-social btn-social-o facebook mr-1">
                              <i class="fa fa-facebook-f"></i>
                            </button>
                            <button class="btn btn-social btn-social-o twitter mr-1">
                              <i class="fa fa-twitter"></i>
                            </button>

                            <button class="btn btn-social btn-social-o linkedin mr-1">
                              <i class="fa fa-linkedin"></i>
                            </button>
                            <button class="btn btn-social btn-social-o instagram mr-1">
                              <i class="fa fa-instagram"></i>
                            </button>

                            <button class="btn btn-social btn-social-o youtube mr-1">
                              <i class="fa fa-youtube"></i>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- LOCATION --> */}
                <div class="single__detail-features tabs__custom">
                  <h5 class="text-capitalize detail-heading ">
                    Agency details
                  </h5>
                  {/* <!-- FILTER VERTICAL --> */}
                  <ul class="nav nav-pills myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active pills-tab-one"
                        data-toggle="pill"
                        href="#pills-tab-one"
                        role="tab"
                        aria-controls="pills-tab-one"
                        aria-selected="true"
                      >
                        Description
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link pills-tab-two"
                        data-toggle="pill"
                        href="#pills-tab-two"
                        role="tab"
                        aria-controls="pills-tab-two"
                        aria-selected="false"
                      >
                        Listing
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link pills-tab-three"
                        data-toggle="pill"
                        href="#pills-tab-three"
                        role="tab"
                        aria-controls="pills-tab-three"
                        aria-selected="false"
                      >
                        Agents
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link pills-tab-four"
                        data-toggle="pill"
                        href="#pills-tab-four"
                        role="tab"
                        aria-controls="pills-tab-four"
                        aria-selected="false"
                      >
                        Reviews
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-tab-one"
                      role="tabpanel"
                      aria-labelledby="pills-tab-one"
                    >
                      <div class="single__detail-desc">
                        <h5 class="text-capitalize detail-heading">
                          Hi, nice to meet you
                        </h5>
                        <div class="show__more">
                          <p>
                            Evans Tower very high demand corner junior one
                            bedroom plus a large balcony boasting full open NYC
                            views. You need to see the views to believe them.
                            Mint condition with new hardwood floors. Lots of
                            closets plus washer and dryer.
                          </p>
                          <p>
                            Fully furnished. Elegantly appointed condominium
                            unit situated on premier location. PS6. The wide
                            entry hall leads to a large living room with dining
                            area. This expansive 2 bedroom and 2 renovated
                            marble bathroom apartment has great windows. Despite
                            the interior views, the apartments Southern and
                            Eastern exposures allow for lovely natural light to
                            fill every room. The master suite is surrounded by
                            handcrafted milkwork and features incredible walk-in
                            closet and storage space.
                          </p>
                          <p>
                            Fully furnished. Elegantly appointed condominium
                            unit situated on premier location. PS6. The wide
                            entry hall leads to a large living room with dining
                            area. This expansive 2 bedroom and 2 renovated
                            marble bathroom apartment has great windows. Despite
                            the interior views, the apartments Southern and
                            Eastern exposures allow for lovely natural light to
                            fill every room. The master suite is surrounded by
                            handcrafted milkwork and features incredible walk-in
                            closet and storage space.
                          </p>
                          <a
                            href="javascript:void(0)"
                            class="show__more-button "
                          >
                            read more
                          </a>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-tab-two"
                      role="tabpanel"
                      aria-labelledby="pills-tab-two"
                    >
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="card__image card__box-v1">
                            <div class="row no-gutters">
                              <div class="col-md-4 col-lg-3 col-xl-4">
                                <div class="card__image__header h-250">
                                  <a href="#">
                                    <div class="ribbon text-capitalize">
                                      sold out
                                    </div>
                                    <img
                                      src="images/600x400.jpg"
                                      alt=""
                                      class="img-fluid w100 img-transition"
                                    />
                                    <div class="info"> for sale</div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-md-4 col-lg-6 col-xl-5 my-auto">
                                <div class="card__image__body">
                                  <span class="badge badge-primary text-capitalize mb-2">
                                    house
                                  </span>
                                  <h6>
                                    <a href="#">vila in coral gables</a>
                                  </h6>
                                  <div class="card__image__body-desc">
                                    <p class="text-capitalize">
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Libero, alias!
                                    </p>
                                    <p class="text-capitalize">
                                      <i class="fa fa-map-marker"></i>
                                      west flaminggo road, las vegas
                                    </p>
                                  </div>

                                  <ul class="list-inline card__content">
                                    <li class="list-inline-item">
                                      <span>
                                        baths <br />
                                        <i class="fa fa-bath"></i> 2
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        beds <br />
                                        <i class="fa fa-bed"></i> 3
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        rooms <br />
                                        <i class="fa fa-inbox"></i> 3
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        area <br />
                                        <i class="fa fa-map"></i> 4300 sq ft
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                <div class="card__image__footer">
                                  <figure>
                                    <img
                                      src="images/80x80.jpg"
                                      alt=""
                                      class="img-fluid rounded-circle"
                                    />
                                  </figure>
                                  <ul class="list-inline my-auto">
                                    <li class="list-inline-item name">
                                      <a href="#">tom wilson</a>
                                    </li>
                                  </ul>
                                  <ul class="list-inline my-auto ml-auto price">
                                    <li class="list-inline-item ">
                                      <h6>$350.000</h6>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="card__image card__box-v1">
                            <div class="row no-gutters">
                              <div class="col-md-4 col-lg-3 col-xl-4">
                                <div class="card__image__header h-250">
                                  <a href="#">
                                    <div class="ribbon text-capitalize">
                                      sold out
                                    </div>
                                    <img
                                      src="images/600x400.jpg"
                                      alt=""
                                      class="img-fluid w100 img-transition"
                                    />
                                    <div class="info"> for sale</div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-md-4 col-lg-6 col-xl-5 my-auto">
                                <div class="card__image__body">
                                  <span class="badge badge-primary text-capitalize mb-2">
                                    house
                                  </span>
                                  <h6>
                                    <a href="#">
                                      Ample Apartment At Last Floor
                                    </a>
                                  </h6>
                                  <div class="card__image__body-desc">
                                    <p class="text-capitalize">
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Libero, alias!
                                    </p>
                                    <p class="text-capitalize">
                                      <i class="fa fa-map-marker"></i>
                                      west flaminggo road, las vegas
                                    </p>
                                  </div>

                                  <ul class="list-inline card__content">
                                    <li class="list-inline-item">
                                      <span>
                                        baths <br />
                                        <i class="fa fa-bath"></i> 2
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        beds <br />
                                        <i class="fa fa-bed"></i> 3
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        rooms <br />
                                        <i class="fa fa-inbox"></i> 3
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        area <br />
                                        <i class="fa fa-map"></i> 4300 sq ft
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                <div class="card__image__footer">
                                  <figure>
                                    <img
                                      src="images/80x80.jpg"
                                      alt=""
                                      class="img-fluid rounded-circle"
                                    />
                                  </figure>
                                  <ul class="list-inline my-auto">
                                    <li class="list-inline-item name">
                                      <a href="#">tom wilson</a>
                                    </li>
                                  </ul>
                                  <ul class="list-inline  my-auto ml-auto price">
                                    <li class="list-inline-item ">
                                      <h6>$350.000</h6>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="card__image card__box-v1">
                            <div class="row no-gutters">
                              <div class="col-md-4 col-lg-3 col-xl-4">
                                <div class="card__image__header h-250">
                                  <a href="#">
                                    <div class="ribbon text-capitalize">
                                      sold out
                                    </div>
                                    <img
                                      src="images/600x400.jpg"
                                      alt=""
                                      class="img-fluid w100 img-transition"
                                    />
                                    <div class="info"> for sale</div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-md-4 col-lg-6 col-xl-5 my-auto">
                                <div class="card__image__body">
                                  <span class="badge badge-primary text-capitalize mb-2">
                                    house
                                  </span>
                                  <h6>
                                    <a href="#">
                                      Ample Apartment At Last Floor
                                    </a>
                                  </h6>
                                  <div class="card__image__body-desc">
                                    <p class="text-capitalize">
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Libero, alias!
                                    </p>
                                    <p class="text-capitalize">
                                      <i class="fa fa-map-marker"></i>
                                      west flaminggo road, las vegas
                                    </p>
                                  </div>

                                  <ul class="list-inline card__content">
                                    <li class="list-inline-item">
                                      <span>
                                        baths <br />
                                        <i class="fa fa-bath"></i> 2
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        beds <br />
                                        <i class="fa fa-bed"></i> 3
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        rooms <br />
                                        <i class="fa fa-inbox"></i> 3
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        area <br />
                                        <i class="fa fa-map"></i> 4300 sq ft
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                <div class="card__image__footer">
                                  <figure>
                                    <img
                                      src="images/80x80.jpg"
                                      alt=""
                                      class="img-fluid rounded-circle"
                                    />
                                  </figure>
                                  <ul class="list-inline my-auto">
                                    <li class="list-inline-item name">
                                      <a href="#">tom wilson</a>
                                    </li>
                                  </ul>
                                  <ul class="list-inline  my-auto ml-auto price">
                                    <li class="list-inline-item ">
                                      <h6>$350.000</h6>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="card__image card__box-v1">
                            <div class="row no-gutters">
                              <div class="col-md-4 col-lg-3 col-xl-4">
                                <div class="card__image__header h-250">
                                  <a href="#">
                                    <div class="ribbon text-capitalize">
                                      sold out
                                    </div>
                                    <img
                                      src="images/600x400.jpg"
                                      alt=""
                                      class="img-fluid w100 img-transition"
                                    />
                                    <div class="info"> for sale</div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-md-4 col-lg-6 col-xl-5 my-auto">
                                <div class="card__image__body">
                                  <span class="badge badge-primary text-capitalize mb-2">
                                    house
                                  </span>
                                  <h6>
                                    <a href="#">Family Home For Sale</a>
                                  </h6>
                                  <div class="card__image__body-desc">
                                    <p class="text-capitalize">
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Libero, alias!
                                    </p>
                                    <p class="text-capitalize">
                                      <i class="fa fa-map-marker"></i>
                                      west flaminggo road, las vegas
                                    </p>
                                  </div>

                                  <ul class="list-inline card__content">
                                    <li class="list-inline-item">
                                      <span>
                                        baths <br />
                                        <i class="fa fa-bath"></i> 2
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        beds <br />
                                        <i class="fa fa-bed"></i> 3
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        rooms <br />
                                        <i class="fa fa-inbox"></i> 3
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        area <br />
                                        <i class="fa fa-map"></i> 4300 sq ft
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                <div class="card__image__footer">
                                  <figure>
                                    <img
                                      src="images/80x80.jpg"
                                      alt=""
                                      class="img-fluid rounded-circle"
                                    />
                                  </figure>
                                  <ul class="list-inline my-auto">
                                    <li class="list-inline-item name">
                                      <a href="#">tom wilson</a>
                                    </li>
                                  </ul>
                                  <ul class="list-inline  my-auto ml-auto price">
                                    <li class="list-inline-item ">
                                      <h6>$350.000</h6>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="card__image card__box-v1">
                            <div class="row no-gutters">
                              <div class="col-md-4 col-lg-3 col-xl-4">
                                <div class="card__image__header h-250">
                                  <a href="#">
                                    <div class="ribbon text-capitalize">
                                      sold out
                                    </div>
                                    <img
                                      src="images/600x400.jpg"
                                      alt=""
                                      class="img-fluid w100 img-transition"
                                    />
                                    <div class="info"> for sale</div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-md-4 col-lg-6 col-xl-5 my-auto">
                                <div class="card__image__body">
                                  <span class="badge badge-primary text-capitalize mb-2">
                                    house
                                  </span>
                                  <h6>
                                    <a href="#">Luxury Villa With Pool</a>
                                  </h6>
                                  <div class="card__image__body-desc">
                                    <p class="text-capitalize">
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Libero, alias!
                                    </p>
                                    <p class="text-capitalize">
                                      <i class="fa fa-map-marker"></i>
                                      west flaminggo road, las vegas
                                    </p>
                                  </div>

                                  <ul class="list-inline card__content">
                                    <li class="list-inline-item">
                                      <span>
                                        baths <br />
                                        <i class="fa fa-bath"></i> 2
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        beds <br />
                                        <i class="fa fa-bed"></i> 3
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        rooms <br />
                                        <i class="fa fa-inbox"></i> 3
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        area <br />
                                        <i class="fa fa-map"></i> 4300 sq ft
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                <div class="card__image__footer">
                                  <figure>
                                    <img
                                      src="images/80x80.jpg"
                                      alt=""
                                      class="img-fluid rounded-circle"
                                    />
                                  </figure>
                                  <ul class="list-inline my-auto">
                                    <li class="list-inline-item name">
                                      <a href="#">tom wilson</a>
                                    </li>
                                  </ul>
                                  <ul class="list-inline  my-auto ml-auto price">
                                    <li class="list-inline-item ">
                                      <h6>$350.000</h6>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="card__image card__box-v1">
                            <div class="row no-gutters">
                              <div class="col-md-4 col-lg-3 col-xl-4">
                                <div class="card__image__header h-250">
                                  <a href="#">
                                    <div class="ribbon text-capitalize">
                                      sold out
                                    </div>
                                    <img
                                      src="images/600x400.jpg"
                                      alt=""
                                      class="img-fluid w100 img-transition"
                                    />
                                    <div class="info"> for sale</div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-md-4 col-lg-6 col-xl-5 my-auto">
                                <div class="card__image__body">
                                  <span class="badge badge-primary text-capitalize mb-2">
                                    house
                                  </span>
                                  <h6>
                                    <a href="#">184 Lexington Avenue</a>
                                  </h6>
                                  <div class="card__image__body-desc">
                                    <p class="text-capitalize">
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Libero, alias!
                                    </p>
                                    <p class="text-capitalize">
                                      <i class="fa fa-map-marker"></i>
                                      west flaminggo road, las vegas
                                    </p>
                                  </div>

                                  <ul class="list-inline card__content">
                                    <li class="list-inline-item">
                                      <span>
                                        baths <br />
                                        <i class="fa fa-bath"></i> 2
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        beds <br />
                                        <i class="fa fa-bed"></i> 3
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        rooms <br />
                                        <i class="fa fa-inbox"></i> 3
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        area <br />
                                        <i class="fa fa-map"></i> 4300 sq ft
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                <div class="card__image__footer">
                                  <figure>
                                    <img
                                      src="images/80x80.jpg"
                                      alt=""
                                      class="img-fluid rounded-circle"
                                    />
                                  </figure>
                                  <ul class="list-inline my-auto">
                                    <li class="list-inline-item name">
                                      <a href="#">tom wilson</a>
                                    </li>
                                  </ul>
                                  <ul class="list-inline  my-auto ml-auto price">
                                    <li class="list-inline-item ">
                                      <h6>$350.000</h6>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="card__image card__box-v1">
                            <div class="row no-gutters">
                              <div class="col-md-4 col-lg-3 col-xl-4">
                                <div class="card__image__header h-250">
                                  <a href="#">
                                    <div class="ribbon text-capitalize">
                                      sold out
                                    </div>
                                    <img
                                      src="images/600x400.jpg"
                                      alt=""
                                      class="img-fluid w100 img-transition"
                                    />
                                    <div class="info"> for sale</div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-md-4 col-lg-6 col-xl-5 my-auto">
                                <div class="card__image__body">
                                  <span class="badge badge-primary text-capitalize mb-2">
                                    house
                                  </span>
                                  <h6>
                                    <a href="#">
                                      The Citizen Apartment 5th Floor
                                    </a>
                                  </h6>
                                  <div class="card__image__body-desc">
                                    <p class="text-capitalize">
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Libero, alias!
                                    </p>
                                    <p class="text-capitalize">
                                      <i class="fa fa-map-marker"></i>
                                      west flaminggo road, las vegas
                                    </p>
                                  </div>

                                  <ul class="list-inline card__content">
                                    <li class="list-inline-item">
                                      <span>
                                        baths <br />
                                        <i class="fa fa-bath"></i> 2
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        beds <br />
                                        <i class="fa fa-bed"></i> 3
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        rooms <br />
                                        <i class="fa fa-inbox"></i> 3
                                      </span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span>
                                        area <br />
                                        <i class="fa fa-map"></i> 4300 sq ft
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                <div class="card__image__footer">
                                  <figure>
                                    <img
                                      src="images/80x80.jpg"
                                      alt=""
                                      class="img-fluid rounded-circle"
                                    />
                                  </figure>
                                  <ul class="list-inline my-auto">
                                    <li class="list-inline-item name">
                                      <a href="#">tom wilson</a>
                                    </li>
                                  </ul>
                                  <ul class="list-inline  my-auto ml-auto price">
                                    <li class="list-inline-item ">
                                      <h6>$350.000</h6>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-tab-three"
                      role="tabpanel"
                      aria-labelledby="pills-tab-three"
                    >
                      <div class="row no-gutters">
                        <div class="col-lg-12 cards">
                          <div class="row">
                            <div class="col-md-6 col-lg-6">
                              <a href="#" class="profile__agents-avatar">
                                <img
                                  src="images/500x400.jpg"
                                  alt=""
                                  class="img-fluid "
                                />
                                <div class="total__property-agent">
                                  20 listing
                                </div>
                              </a>
                            </div>
                            <div class="col-md-6 col-lg-6 my-auto">
                              <div class="profile__agents-info">
                                <h5 class="text-capitalize">
                                  <a href="#" target="_blank">
                                    jhon doe
                                  </a>
                                </h5>
                                <p class="text-capitalize mb-1">
                                  property agent
                                </p>

                                <ul class="list-unstyled mt-2">
                                  <li>
                                    <a href="#" class="text-capitalize">
                                      <span>
                                        <i class="fa fa-building"></i> office :
                                      </span>{" "}
                                      123 456 789
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" class="text-capitalize">
                                      <span>
                                        <i class="fa fa-phone"></i> mobile :
                                      </span>{" "}
                                      123 456 789
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" class="text-capitalize">
                                      <span>
                                        <i class="fa fa-fax"></i> fax :{" "}
                                      </span>{" "}
                                      342 655
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" class="text-capitalize">
                                      <span>
                                        <i class="fa fa-envelope"></i> email :
                                      </span>
                                      agents@property.com
                                    </a>
                                  </li>
                                </ul>
                                <p class="mb-0 mt-3">
                                  <button class="btn btn-social btn-social-o facebook mr-1">
                                    <i class="fa fa-facebook-f"></i>
                                  </button>
                                  <button class="btn btn-social btn-social-o twitter mr-1">
                                    <i class="fa fa-twitter"></i>
                                  </button>

                                  <button class="btn btn-social btn-social-o linkedin mr-1">
                                    <i class="fa fa-linkedin"></i>
                                  </button>
                                  <button class="btn btn-social btn-social-o instagram mr-1">
                                    <i class="fa fa-instagram"></i>
                                  </button>

                                  <button class="btn btn-social btn-social-o youtube mr-1">
                                    <i class="fa fa-youtube"></i>
                                  </button>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 cards">
                          <div class="row">
                            <div class="col-md-6 col-lg-6">
                              <a href="#" class="profile__agents-avatar">
                                <img
                                  src="images/500x400.jpg"
                                  alt=""
                                  class="img-fluid "
                                />
                                <div class="total__property-agent">
                                  20 listing
                                </div>
                              </a>
                            </div>
                            <div class="col-md-6 col-lg-6 my-auto">
                              <div class="profile__agents-info">
                                <h5 class="text-capitalize">
                                  <a href="#" target="_blank">
                                    jhon doe
                                  </a>
                                </h5>
                                <p class="text-capitalize mb-1">
                                  property agent
                                </p>

                                <ul class="list-unstyled mt-2">
                                  <li>
                                    <a href="#" class="text-capitalize">
                                      <span>
                                        <i class="fa fa-building"></i> office :
                                      </span>{" "}
                                      123 456 789
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" class="text-capitalize">
                                      <span>
                                        <i class="fa fa-phone"></i> mobile :
                                      </span>{" "}
                                      123 456 789
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" class="text-capitalize">
                                      <span>
                                        <i class="fa fa-fax"></i> fax :{" "}
                                      </span>
                                      342 655
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" class="text-capitalize">
                                      <span>
                                        <i class="fa fa-envelope"></i> email :
                                      </span>
                                      agents@property.com
                                    </a>
                                  </li>
                                </ul>
                                <p class="mb-0 mt-3">
                                  <button class="btn btn-social btn-social-o facebook mr-1">
                                    <i class="fa fa-facebook-f"></i>
                                  </button>
                                  <button class="btn btn-social btn-social-o twitter mr-1">
                                    <i class="fa fa-twitter"></i>
                                  </button>

                                  <button class="btn btn-social btn-social-o linkedin mr-1">
                                    <i class="fa fa-linkedin"></i>
                                  </button>
                                  <button class="btn btn-social btn-social-o instagram mr-1">
                                    <i class="fa fa-instagram"></i>
                                  </button>

                                  <button class="btn btn-social btn-social-o youtube mr-1">
                                    <i class="fa fa-youtube"></i>
                                  </button>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 cards">
                          <div class="row">
                            <div class="col-md-6 col-lg-6">
                              <a href="#" class="profile__agents-avatar">
                                <img
                                  src="images/500x400.jpg"
                                  alt=""
                                  class="img-fluid "
                                />
                                <div class="total__property-agent">
                                  20 listing
                                </div>
                              </a>
                            </div>
                            <div class="col-md-6 col-lg-6 my-auto">
                              <div class="profile__agents-info">
                                <h5 class="text-capitalize">
                                  <a href="#" target="_blank">
                                    jhon doe
                                  </a>
                                </h5>
                                <p class="text-capitalize mb-1">
                                  property agent
                                </p>

                                <ul class="list-unstyled mt-2">
                                  <li>
                                    <a href="#" class="text-capitalize">
                                      <span>
                                        <i class="fa fa-building"></i> office :
                                      </span>{" "}
                                      123 456 789
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" class="text-capitalize">
                                      <span>
                                        <i class="fa fa-phone"></i> mobile :
                                      </span>{" "}
                                      123 456 789
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" class="text-capitalize">
                                      <span>
                                        <i class="fa fa-fax"></i> fax :{" "}
                                      </span>
                                      342 655
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" class="text-capitalize">
                                      <span>
                                        <i class="fa fa-envelope"></i> email :
                                      </span>
                                      agents@property.com
                                    </a>
                                  </li>
                                </ul>
                                <p class="mb-0 mt-3">
                                  <button class="btn btn-social btn-social-o facebook mr-1">
                                    <i class="fa fa-facebook-f"></i>
                                  </button>
                                  <button class="btn btn-social btn-social-o twitter mr-1">
                                    <i class="fa fa-twitter"></i>
                                  </button>

                                  <button class="btn btn-social btn-social-o linkedin mr-1">
                                    <i class="fa fa-linkedin"></i>
                                  </button>
                                  <button class="btn btn-social btn-social-o instagram mr-1">
                                    <i class="fa fa-instagram"></i>
                                  </button>

                                  <button class="btn btn-social btn-social-o youtube mr-1">
                                    <i class="fa fa-youtube"></i>
                                  </button>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 cards">
                          <div class="row">
                            <div class="col-md-6 col-lg-6">
                              <a href="#" class="profile__agents-avatar">
                                <img
                                  src="images/500x400.jpg"
                                  alt=""
                                  class="img-fluid "
                                />
                                <div class="total__property-agent">
                                  20 listing
                                </div>
                              </a>
                            </div>
                            <div class="col-md-6 col-lg-6 my-auto">
                              <div class="profile__agents-info">
                                <h5 class="text-capitalize">
                                  <a href="#" target="_blank">
                                    jhon doe
                                  </a>
                                </h5>
                                <p class="text-capitalize mb-1">
                                  property agent
                                </p>

                                <ul class="list-unstyled mt-2">
                                  <li>
                                    <a href="#" class="text-capitalize">
                                      <span>
                                        <i class="fa fa-building"></i> office :
                                      </span>{" "}
                                      123 456 789
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" class="text-capitalize">
                                      <span>
                                        <i class="fa fa-phone"></i> mobile :
                                      </span>{" "}
                                      123 456 789
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" class="text-capitalize">
                                      <span>
                                        <i class="fa fa-fax"></i> fax :{" "}
                                      </span>
                                      342 655
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" class="text-capitalize">
                                      <span>
                                        <i class="fa fa-envelope"></i> email :
                                      </span>
                                      agents@property.com
                                    </a>
                                  </li>
                                </ul>
                                <p class="mb-0 mt-3">
                                  <button class="btn btn-social btn-social-o facebook mr-1">
                                    <i class="fa fa-facebook-f"></i>
                                  </button>
                                  <button class="btn btn-social btn-social-o twitter mr-1">
                                    <i class="fa fa-twitter"></i>
                                  </button>

                                  <button class="btn btn-social btn-social-o linkedin mr-1">
                                    <i class="fa fa-linkedin"></i>
                                  </button>
                                  <button class="btn btn-social btn-social-o instagram mr-1">
                                    <i class="fa fa-instagram"></i>
                                  </button>

                                  <button class="btn btn-social btn-social-o youtube mr-1">
                                    <i class="fa fa-youtube"></i>
                                  </button>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-tab-four"
                      role="tabpanel"
                      aria-labelledby="pills-tab-four"
                    >
                      {/* <!-- RATE US  WRITE --> */}
                      <div class="single__detail-features-review">
                        <div class="media mt-4">
                          <img
                            src="images/80x80.jpg"
                            alt=""
                            class="img-fluid rounded-circle mr-3"
                          />
                          <div class="media-body">
                            <h6 class="mt-0">Jhon doe</h6>
                            <span class="mb-3">Mei 13, 2020</span>
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star selected"></i>
                                <i class="fa fa-star selected"></i>
                                <i class="fa fa-star selected"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">3/5</li>
                            </ul>
                            <p>
                              {" "}
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis. Fusce condimentum nunc ac nisi
                              vulputate fringilla. Donec lacinia congue felis in
                              faucibus.
                            </p>

                            <div class="media mt-4">
                              <a class="pr-3" href="#">
                                <img
                                  src="images/80x80.jpg"
                                  alt=""
                                  class="img-fluid rounded-circle"
                                />
                              </a>
                              <div class="media-body">
                                <h6 class="mt-0">Mark </h6>
                                <span class="mb-3">Mei 13, 2020</span>
                                <ul class="list-inline">
                                  <li class="list-inline-item">
                                    <i class="fa fa-star selected"></i>
                                    <i class="fa fa-star selected"></i>
                                    <i class="fa fa-star selected"></i>
                                    <i class="fa fa-star selected"></i>
                                    <i class="fa fa-star selected"></i>
                                  </li>
                                  <li class="list-inline-item">5/5</li>
                                </ul>
                                <p>
                                  {" "}
                                  Cras sit amet nibh libero, in gravida nulla.
                                  Nulla vel metus scelerisque ante sollicitudin.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="media mt-4">
                          <img
                            src="images/80x80.jpg"
                            alt=""
                            class="img-fluid rounded-circle mr-3"
                          />
                          <div class="media-body">
                            <h6 class="mt-0">Jhon Doe</h6>
                            <span class="mb-3">Mei 13, 2020</span>
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star selected"></i>
                                <i class="fa fa-star selected"></i>
                                <i class="fa fa-star selected"></i>
                                <i class="fa fa-star selected"></i>
                                <i class="fa fa-star selected"></i>
                              </li>
                              <li class="list-inline-item">5/5</li>
                            </ul>
                            <p>
                              {" "}
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin. Cras
                              purus odio, vestibulum in vulputate at, tempus
                              viverra turpis. Fusce condimentum nunc ac nisi
                              vulputate fringilla. Donec lacinia congue felis in
                              faucibus.
                            </p>
                          </div>
                        </div>
                        {/* <!-- COMMENT -->
                                    <!-- COMMENT --> */}
                        <hr />
                        <div class="row">
                          <div class="col-md-12">
                            <p class="mb-2">Your rating for this listing:</p>
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star selected"></i>
                                <i class="fa fa-star selected"></i>
                                <i class="fa fa-star selected"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">3/5</li>
                            </ul>
                            <div class="form-group">
                              <label>Your Name</label>
                              <input
                                type="text"
                                class="form-control"
                                required="required"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>What's your Email?</label>
                              <input
                                type="email"
                                class="form-control"
                                required="required"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Subject</label>
                              <input
                                type="text"
                                class="form-control"
                                required="required"
                              />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <label>Your message</label>
                              <textarea
                                class="form-control"
                                rows="4"
                              ></textarea>
                            </div>
                          </div>
                        </div>

                        <button
                          type="submit"
                          class="btn btn-primary float-right "
                        >
                          {" "}
                          Submit review <i class="fa fa-paper-plane ml-2"></i>
                        </button>
                        {/* <!-- END COMMENT --> */}
                      </div>

                      {/* <!-- END RATE US  WRITE --> */}
                      <div class="clearfix"></div>
                    </div>
                  </div>
                  {/* <!-- END FILTER VERTICAL --> */}
                </div>
                {/* <!-- END LOCATION --> */}
              </div>
              <div class="col-lg-4">
                <div class="sticky-top">
                  {/* <!-- FORM FILTER --> */}
                  <div class="products__filter mb-30">
                    <div class="products__filter__group">
                      <div class="products__filter__header">
                        <h5 class="text-center text-capitalize">
                          Contact Form
                        </h5>
                      </div>
                      <div class="products__filter__body">
                        <div class="form-group">
                          <label>Full Name</label>
                          <input type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label>Email (Optional)</label>
                          <input type="email" class="form-control" />
                        </div>
                        <div class="form-group">
                          <label>Phone</label>
                          <input type="text" class="form-control" />
                        </div>

                        <div class="form-group">
                          <label>Your message</label>
                          <textarea class="form-control" rows="3"></textarea>
                        </div>
                      </div>
                      <div class="products__filter__footer">
                        <div class="form-group mb-0">
                          <button class="btn btn-primary text-capitalize btn-block">
                            {" "}
                            submit <i class="fa fa-paper-plane ml-1"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- END FORM FILTER -->
                        <!-- ARCHIVE CATEGORY --> */}
                  <aside class=" wrapper__list__category">
                    {/* <!-- CATEGORY --> */}
                    <div class="widget widget__archive">
                      <div class="widget__title">
                        <h5 class="text-dark mb-0 text-center">
                          Categories Property
                        </h5>
                      </div>
                      <ul class="list-unstyled">
                        <li>
                          <a href="#" class="text-capitalize">
                            apartement
                            <span class="badge badge-primary">14</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-capitalize">
                            villa
                            <span class="badge badge-primary">4</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-capitalize">
                            family house
                            <span class="badge badge-primary">2</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-capitalize">
                            modern villa
                            <span class="badge badge-primary">8</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-capitalize">
                            town house
                            <span class="badge badge-primary">10</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-capitalize">
                            office
                            <span class="badge badge-primary">12</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- END CATEGORY --> */}
                  </aside>
                  {/* <!-- End ARCHIVE CATEGORY --> */}

                  <div class="download mb-0">
                    <h5 class="text-center text-capitalize">
                      Property Attachments
                    </h5>
                    <div class="download__item">
                      <a href="#" target="_blank">
                        <i class="fa fa-file-pdf-o mr-3" aria-hidden="true"></i>
                        Download Document.Pdf
                      </a>
                    </div>
                    <div class="download__item">
                      <a href="#" target="_blank">
                        <i
                          class="fa fa-file-word-o mr-3"
                          aria-hidden="true"
                        ></i>
                        Presentation 2016-17.Doc
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- END LISTING LIST -->

    <!-- CALL TO ACTION --> */}
        
        {/* <!-- END CALL TO ACTION -->

    <!-- Footer  --> */}
        <footer>
          <div class="wrapper__footer bg-theme-footer">
            <div class="container">
              <div class="row">
                {/* <!-- ADDRESS --> */}
                <div class="col-md-4">
                  <div class="widget__footer">
                    <figure>
                      <img
                        src="images/logo-blue.png"
                        alt=""
                        class="logo-footer"
                      />
                    </figure>
                    <p>
                      Rethouse Real Estate is a premium Property template based
                      on Bootstrap 4. Rethouse Real Estate helped thousands of
                      clients to find the right property for their needs.
                    </p>

                    <ul class="list-unstyled mb-0 mt-3">
                      <li>
                        {" "}
                        <b>
                          {" "}
                          <i class="fa fa-map-marker"></i>
                        </b>
                        <span>214 West Arnold St. New York, NY 10002</span>{" "}
                      </li>
                      <li>
                        {" "}
                        <b>
                          <i class="fa fa-phone-square"></i>
                        </b>
                        <span>(123) 345-6789</span>{" "}
                      </li>
                      <li>
                        {" "}
                        <b>
                          <i class="fa fa-phone-square"></i>
                        </b>
                        <span>(+100) 123 456 7890</span>{" "}
                      </li>
                      <li>
                        {" "}
                        <b>
                          <i class="fa fa-headphones"></i>
                        </b>
                        <span>support@realvilla.demo</span>{" "}
                      </li>
                      <li>
                        {" "}
                        <b>
                          <i class="fa fa-clock-o"></i>
                        </b>
                        <span>Mon - Sun / 9:00AM - 8:00PM</span>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- END ADDRESS -->

                    <!-- QUICK LINKS --> */}
                <div class="col-md-4">
                  <div class="widget__footer">
                    <h4 class="footer-title">Quick Links</h4>
                    <div class="link__category-two-column">
                      <ul class="list-unstyled ">
                        <li class="list-inline-item">
                          <a href="#">Commercial</a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">business</a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">House</a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">Residential</a>
                        </li>

                        <li class="list-inline-item">
                          <a href="#">Residential Tower</a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">Beverly Hills</a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">Los angeles</a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">The beach</a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">Property Listing</a>
                        </li>

                        <li class="list-inline-item">
                          <a href="#">Clasic</a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">Modern Home</a>
                        </li>

                        <li class="list-inline-item">
                          <a href="#">Luxury</a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">Beach Pasadena</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- END QUICK LINKS -->


                    <!-- NEWSLETTERS --> */}
                <div class="col-md-4">
                  <div class="widget__footer">
                    <h4 class="footer-title">follow us </h4>
                    <p class="mb-2">
                      Follow us and stay in touch to get the latest news
                    </p>
                    <p>
                      <button class="btn btn-social btn-social-o facebook mr-1">
                        <i class="fa fa-facebook-f"></i>
                      </button>
                      <button class="btn btn-social btn-social-o twitter mr-1">
                        <i class="fa fa-twitter"></i>
                      </button>

                      <button class="btn btn-social btn-social-o linkedin mr-1">
                        <i class="fa fa-linkedin"></i>
                      </button>
                      <button class="btn btn-social btn-social-o instagram mr-1">
                        <i class="fa fa-instagram"></i>
                      </button>

                      <button class="btn btn-social btn-social-o youtube mr-1">
                        <i class="fa fa-youtube"></i>
                      </button>
                    </p>
                    <br />
                    <h4 class="footer-title">newsletter</h4>
                    {/* <!-- Form Newsletter --> */}
                    <div class="widget__form-newsletter ">
                      <p>
                        Don’t miss to subscribe to our news feeds, kindly fill
                        the form below
                      </p>
                      <div class="mt-3">
                        <input
                          type="text"
                          class="form-control mb-2"
                          placeholder="Your email address"
                        />

                        <button
                          class="btn btn-primary btn-block text-capitalize"
                          type="button"
                        >
                          subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- END NEWSLETTER --> */}
              </div>
            </div>
          </div>

          {/* <!-- Footer Bottom --> */}
          <div class="bg__footer-bottom-v1">
            <div class="container">
              <div class="row flex-column-reverse flex-md-row">
                <div class="col-md-6">
                  <span>
                    © 2020 Rethouse Real Estate - Premium real estate & theme
                    &amp; theme by
                    <a href="#">retenvi.com</a>
                  </span>
                </div>
                <div class="col-md-6">
                  <ul class="list-inline ">
                    <li class="list-inline-item">
                      <a href="#">privacy</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">contact</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">about</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">faq</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Footer  --> */}
        </footer>

        {/* <!-- SCROLL TO TOP --> */}
        <a href="javascript:" id="return-to-top">
          <i class="fa fa-chevron-up"></i>
        </a>
        {/* <!-- END SCROLL TO TOP --> */}
      </>
    );
}
export default AgencyDetails;