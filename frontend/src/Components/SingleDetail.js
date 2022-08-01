import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singleAd } from "../Admin/redux/adSlice";
import { Link, useParams } from "react-router-dom";
// import { Params } from "react-router-dom";




const SingleDetail = () => {

  const dispatch = useDispatch();
  const ads = useSelector(state => state.ad.ads);
  const {id} = useParams();
  useEffect(() => {
    dispatch(singleAd(id));
    console.log("luj", ads.id);

  }, [dispatch]);




  return (


    <>

      <div class="bg-theme-overlay">
        <section class="section__breadcrumb ">
          <div class="container">
            <div class="row d-flex justify-content-center">
              <div class="col-md-8 text-center">
                <h2 class="text-capitalize text-white"> Property Details</h2>
                <ul class="list-inline ">
                  <li class="list-inline-item">
                    <a href="#" class="text-white">
                      home
                    </a>
                  </li>

                  <li class="list-inline-item">
                    <a href="#" class="text-white">
                      Property Details
                      {/* {ads.title} */}
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

      <section class="single__Detail">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              {/* <!-- SLIDER IMAGE DETAIL --> */}
              <div class="slider__image__detail-large owl-carousel owl-theme">
                <div class="item">
                  <div class="slider__image__detail-large-one">
                    <img
                      src="images/1920x1080.jpg"
                      alt=""
                      class="img-fluid w-100 img-transition"
                    />
                    <div class="description">
                      <figure>
                        <img src="images/80x80.jpg" alt="" class="img-fluid" />
                      </figure>
                      <span class="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <div class="price">
                        <h5 class="text-capitalize">$13,000/mo</h5>
                      </div>
                      <h4 class="text-capitalize">Luxury Family Home</h4>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="slider__image__detail-large-one">
                    <img
                      src="images/1920x1080.jpg"
                      alt=""
                      class="img-fluid w-100 img-transition"
                    />
                    <div class="description">
                      <figure>
                        <img src="images/80x80.jpg" alt="" class="img-fluid" />
                      </figure>
                      <span class="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <div class="price">
                        <h5 class="text-capitalize">$13,000/mo</h5>
                      </div>
                      <h4 class="text-capitalize">Luxury Family Home</h4>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="slider__image__detail-large-one">
                    <img
                      src="images/1920x1080.jpg"
                      alt=""
                      class="img-fluid w-100 img-transition"
                    />
                    <div class="description">
                      <figure>
                        <img src="images/80x80.jpg" alt="" class="img-fluid" />
                      </figure>
                      <span class="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <div class="price">
                        <h5 class="text-capitalize">$13,000/mo</h5>
                      </div>
                      <h4 class="text-capitalize">Luxury Family Home</h4>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="slider__image__detail-large-one">
                    <img
                      src="images/1920x1080.jpg"
                      alt=""
                      class="img-fluid w-100 img-transition"
                    />
                    <div class="description">
                      <figure>
                        <img src="images/80x80.jpg" alt="" class="img-fluid" />
                      </figure>
                      <span class="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <div class="price">
                        <h5 class="text-capitalize">$13,000/mo</h5>
                      </div>
                      <h4 class="text-capitalize">Luxury Family Home</h4>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="slider__image__detail-large-one">
                    <img
                      src="images/1920x1080.jpg"
                      alt=""
                      class="img-fluid w-100 img-transition"
                    />
                    <div class="description">
                      <figure>
                        <img src="images/80x80.jpg" alt="" class="img-fluid" />
                      </figure>
                      <span class="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <div class="price">
                        <h5 class="text-capitalize">$13,000/mo</h5>
                      </div>
                      <h4 class="text-capitalize">Luxury Family Home</h4>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="slider__image__detail-large-one">
                    <img
                      src="images/1920x1080.jpg"
                      alt=""
                      class="img-fluid w-100 img-transition"
                    />
                    <div class="description">
                      <figure>
                        <img src="images/80x80.jpg" alt="" class="img-fluid" />
                      </figure>
                      <span class="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <div class="price">
                        <h5 class="text-capitalize">$13,000/mo</h5>
                      </div>
                      <h4 class="text-capitalize">Luxury Family Home</h4>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="slider__image__detail-large-one">
                    <img
                      src="images/1920x1080.jpg"
                      alt=""
                      class="img-fluid w-100 img-transition"
                    />
                    <div class="description">
                      <figure>
                        <img src="images/80x80.jpg" alt="" class="img-fluid" />
                      </figure>
                      <span class="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <div class="price">
                        <h5 class="text-capitalize">$13,000/mo</h5>
                      </div>
                      <h4 class="text-capitalize">Luxury Family Home</h4>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="slider__image__detail-large-one">
                    <img
                      src="images/1920x1080.jpg"
                      alt=""
                      class="img-fluid w-100 img-transition"
                    />
                    <div class="description">
                      <figure>
                        <img src="images/80x80.jpg" alt="" class="img-fluid" />
                      </figure>
                      <span class="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <div class="price">
                        <h5 class="text-capitalize">$13,000/mo</h5>
                      </div>
                      <h4 class="text-capitalize">Luxury Family Home</h4>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="slider__image__detail-large-one">
                    <img
                      src="images/1920x1080.jpg"
                      alt=""
                      class="img-fluid w-100 img-transition"
                    />
                    <div class="description">
                      <figure>
                        <img src="images/80x80.jpg" alt="" class="img-fluid" />
                      </figure>
                      <span class="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <div class="price">
                        <h5 class="text-capitalize">$13,000/mo</h5>
                      </div>
                      <h4 class="text-capitalize">amal Family Home</h4>
                      <p class="text-uppercase">
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="slider__image__detail-thumb owl-carousel owl-theme">
                <div class="item">
                  <div class="slider__image__detail-thumb-one">
                    <img
                      src="images/600x400.jpg"
                      alt=""
                      class="img-fluid w-100 img-transition"
                    />
                  </div>
                </div>
                <div class="item">
                  <div class="slider__image__detail-thumb-one">
                    <img
                      src="images/600x400.jpg"
                      alt=""
                      class="img-fluid w-100 img-transition"
                    />
                  </div>
                </div>
                <div class="item">
                  <div class="slider__image__detail-thumb-one">
                    <img
                      src="images/600x400.jpg"
                      alt=""
                      class="img-fluid w-100 img-transition"
                    />
                  </div>
                </div>
                <div class="item">
                  <div class="slider__image__detail-thumb-one">
                    <img
                      src="images/600x400.jpg"
                      alt=""
                      class="img-fluid w-100 img-transition"
                    />
                  </div>
                </div>
                <div class="item">
                  <div class="slider__image__detail-thumb-one">
                    <img
                      src="images/600x400.jpg"
                      alt=""
                      class="img-fluid w-100 img-transition"
                    />
                  </div>
                </div>
                <div class="item">
                  <div class="slider__image__detail-thumb-one">
                    <img
                      src="images/600x400.jpg"
                      alt=""
                      class="img-fluid w-100 img-transition"
                    />
                  </div>
                </div>
                <div class="item">
                  <div class="slider__image__detail-thumb-one">
                    <img
                      src="images/600x400.jpg"
                      alt=""
                      class="img-fluid w-100 img-transition"
                    />
                  </div>
                </div>
                <div class="item">
                  <div class="slider__image__detail-thumb-one">
                    <img
                      src="images/600x400.jpg"
                      alt=""
                      class="img-fluid w-100 img-transition"
                    />
                  </div>
                </div>
                <div class="item">
                  <div class="slider__image__detail-thumb-one">
                    <img
                      src="images/600x400.jpg"
                      alt=""
                      class="img-fluid w-100 img-transition"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- END SLIDER IMAGE DETAIL --> */}
              <div class="row">
                <div class="col-md-9 col-lg-9">
                  <div class="single__detail-title mt-4">
                    <h3 class="text-capitalize">{ads.title}</h3>
                    <p>Read Below For More Details</p>
                  </div>
                </div>
                <div class="col-md-3 col-lg-3">
                  <div class="single__detail-price mt-4">
                    <h3 class="text-capitalize text-gray">$13.000/mo</h3>

                  </div>
                </div>
              </div>


              <div class="single__detail-features">
                <h6 class="text-capitalize detail-heading">
                  property views
                </h6>
                {/* <!-- CANVAS --> */}
                <div class="wrapper">
                  <canvas id="myChart" class="chart"></canvas>
                </div>
              </div>



              {/* <!-- DESCRIPTION --> */}
              <div class="row">
                <div class="col-lg-12">
                  <div class="single__detail-desc">
                    <h6 class="text-capitalize detail-heading">description</h6>
                    <div class="">
                      <p>
                        Evans Tower very high demand corner junior one bedroom
                        plus a large balcony boasting full open NYC views. You
                        need to see the views to believe them. Mint condition
                        with new hardwood floors. Lots of closets plus washer
                        and dryer.
                      </p>
                      <p>
                        Fully furnished. Elegantly appointed condominium unit
                        situated on premier location. PS6. The wide entry hall
                        leads to a large living room with dining area. This
                        expansive 2 bedroom and 2 renovated marble bathroom
                        apartment has great windows. Despite the interior views,
                        the apartments Southern and Eastern exposures allow for
                        lovely natural light to fill every room. The master
                        suite is surrounded by handcrafted milkwork and features
                        incredible walk-in closet and storage space.
                      </p>




                    </div>
                  </div>
                  <div class="clearfix"></div>

                  {/* <!-- PROPERTY DETAILS SPEC --> */}
                  <div class="single__detail-features">
                    <h6 class="text-capitalize detail-heading">
                      property details
                    </h6>
                    {/* <!-- INFO PROPERTY DETAIL --> */}
                    <div class="property__detail-info">
                      <div class="row">
                        <div class="col-md-6 col-lg-6">
                          <ul class="property__detail-info-list list-unstyled">
                            <li>
                              <b>Property ID:</b> RV151
                            </li>
                            <li>
                              <b>Tilte:</b> villa
                            </li>
                            <li>
                              <b>Price:</b> $484,400
                            </li>

                            <li>
                              <b>Bedrooms:</b> 4
                            </li>
                            <li>
                              <b>Bathrooms:</b> 2
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-6 col-lg-6">
                          <ul class="property__detail-info-list list-unstyled">
                            <li>
                              <b>Phone:</b> 1
                            </li>
                            <li>
                              <b>Location:</b> 458 SqFt
                            </li>
                            <li>
                              <b>Year Built:</b> 2019-01-09
                            </li>
                            <li>
                              <b>Property Type:</b> Full Family Home
                            </li>
                            <li>
                              <b>Property Status:</b> For rent
                            </li>
                          </ul>
                        </div>
                      </div>


                    </div>
                    {/* <!-- END INFO PROPERTY DETAIL --> */}
                  </div>
                  {/* <!-- END PROPERTY DETAILS SPEC --> */}
                  <div class="clearfix"></div>



                  <div class="single__detail-features">
                    <h6 class="text-capitalize detail-heading">floor plan</h6>
                    {/* <!-- FLOR PLAN IMAGE --> */}
                    <div id="accordion" class="floorplan" role="tablist">
                      <div class="card">
                        <div class="card-header" role="tab" id="headingOne">
                          <a
                            class="text-capitalize"
                            data-toggle="collapse"
                            href="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            first floor{" "}
                            <span class="badge badge-light rounded p-1 ml-2">
                              460 sq ft
                            </span>
                          </a>
                        </div>
                        <div
                          id="collapseOne"
                          class="collapse show"
                          role="tabpanel"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div class="card-body">
                            <figure>
                              <img
                                src="images/floorplan.jpg"
                                alt=""
                                class="img-fluid"
                              />
                            </figure>
                            Excepteur sint ocaec at cupdatat proident suntin
                            culpa qui officia deserunt mol anim id esa laborum
                            perspiciat. Duis aute irure dolor reprehenderit in
                            voluptate velit essle cillum dolore eu fugiat nulla
                            pariatur.
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header" role="tab" id="headingTwo">
                          <a
                            class="collapsed text-capitalize"
                            data-toggle="collapse"
                            href="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            second floor{" "}
                            <span class="badge badge-light rounded p-1 ml-2">
                              460 sq ft
                            </span>
                          </a>
                        </div>
                        <div
                          id="collapseTwo"
                          class="collapse"
                          role="tabpanel"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion"
                        >
                          <div class="card-body">
                            <figure>
                              <img
                                src="images/floorplan2.jpg"
                                alt=""
                                class="img-fluid"
                              />
                            </figure>
                            They offers a host of logistic management services
                            and supply chain . We provide innovative solutions
                            with the best. tempor incididunt ut labore et dolor
                            empor tempor incididunt innovative solutions
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header" role="tab" id="headingThree">
                          <a
                            class="collapsed text-capitalize"
                            data-toggle="collapse"
                            href="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            garage{" "}
                            <span class="badge badge-light rounded p-1 ml-2">
                              460 sq ft
                            </span>
                          </a>
                        </div>
                        <div
                          id="collapseThree"
                          class="collapse"
                          role="tabpanel"
                          aria-labelledby="headingThree"
                          data-parent="#accordion"
                        >
                          <div class="card-body">
                            <figure>
                              <img
                                src="images/floorplan3.jpg"
                                alt=""
                                class="img-fluid"
                              />
                            </figure>
                            They offers a host of logistic management services
                            and supply chain . We provide innovative solutions
                            with the best. tempor incididunt ut labore et dolor
                            empor tempor incididunt innovative solutions
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="single__detail-features">
                    <h6 class="text-capitalize detail-heading">location</h6>
                    {/* <!-- FILTER VERTICAL --> */}
                    <ul
                      class="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >

                      <h5 className="nav-link active">Amman</h5>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="pills-map-location"
                        role="tabpanel"
                        aria-labelledby="pills-map-location-tab"
                      >
                        <div id="map-canvas">
                          {/* <iframe
                            class="h600 w100"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50446.89789906054!2d-122.41577600000001!3d37.791654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd473843de08ff793!2sBetter%20Property%20Management!5e0!3m2!1sen!2sus!4v1591226304089!5m2!1sen!2sus"
                            style="border:0;"
                            allowfullscreen=""
                            aria-hidden="false"
                            tabindex="0"
                          ></iframe> */}
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-street-view"
                        role="tabpanel"
                        aria-labelledby="pills-street-view-tab"
                      >
                        {/* <iframe
                          class="h600 w100"
                          src="https://www.google.com/maps/embed?pb=!4v1553797194458!6m8!1m7!1sR4K_5Z2wRHTk9el8KLTh9Q!2m2!1d36.82551718071267!2d-76.34864590837246!3f305.15097!4f0!5f0.7820865974627469"
                          style="border:0;"
                          allowfullscreen
                        ></iframe> */}
                      </div>
                    </div>
                    {/* <!-- END FILTER VERTICAL --> */}
                  </div>
                  {/* <!-- END LOCATION --> */}



                </div>
              </div>
              {/* <!-- END DESCRIPTION --> */}
            </div>
            <div class="col-lg-4">
              {/* <!-- FORM FILTER --> */}
              <div class="products__filter mb-30">
                <div class="products__filter__group">
                  <div class="products__filter__header">
                    <h5 class="text-center text-capitalize">property filter</h5>
                  </div>
                  <div class="products__filter__body">
                    <div class="form-group">
                      <select class="wide select_option">
                        <option data-display="Property Status">
                          Property Status
                        </option>
                        <option>For Sale</option>
                        <option>For Rent</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <select class="wide select_option">
                        <option data-display="Property Type">
                          Property Type
                        </option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Land</option>
                        <option>Luxury</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <select class="wide select_option">
                        <option data-display="Area From">Area From </option>
                        <option>1500</option>
                        <option>1200</option>
                        <option>900</option>
                        <option>600</option>
                        <option>300</option>
                        <option>100</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <select class="wide select_option">
                        <option data-display="Locations">Locations</option>
                        <option>United Kingdom</option>
                        <option>American Samoa</option>
                        <option>Belgium</option>
                        <option>Canada</option>
                        <option>Delaware</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <select class="wide select_option">
                        <option data-display="Bedrooms">Bedrooms</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <div class="form-group">
                        <select class="wide select_option">
                          <option data-display="Bathrooms">Bathrooms</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="mb-3">Price range</label>
                      <div class="filter__price">
                        <input
                          class="price-range"
                          type="text"
                          name="my_range"
                          value=""
                        />
                      </div>
                    </div>

                    <div class="form-group mb-0 mt-2">
                      <a
                        class="btn btn-outline-primary btn-block text-capitalize advanced-filter"
                        data-toggle="collapse"
                        href="#multiCollapseExample1"
                        aria-controls="multiCollapseExample1"
                      >
                        <i class="fa fa-plus-circle"></i> advanced filter
                      </a>

                      <div
                        class="collapse multi-collapse"
                        id="multiCollapseExample1"
                      >
                        <div class="advancedfilter">
                          <div class="checkbox checkbox-primary">
                            <input id="checkbox2" type="checkbox" />
                            <label
                              for="checkbox2"
                              class="label-brand text-capitalize"
                            >
                              Air Conditioning
                            </label>
                          </div>
                          <div class="checkbox checkbox-primary">
                            <input id="checkbox3" type="checkbox" />
                            <label
                              for="checkbox3"
                              class="label-brand text-capitalize"
                            >
                              Swiming Pool
                            </label>
                          </div>
                          <div class="checkbox checkbox-primary">
                            <input id="checkbox4" type="checkbox" />
                            <label
                              for="checkbox4"
                              class="label-brand text-capitalize"
                            >
                              Central Heating
                            </label>
                          </div>
                          <div class="checkbox checkbox-primary">
                            <input id="checkbox5" type="checkbox" />
                            <label
                              for="checkbox5"
                              class="label-brand text-capitalize"
                            >
                              Spa & Massage
                            </label>
                          </div>
                          <div class="checkbox checkbox-primary">
                            <input id="checkbox6" type="checkbox" />
                            <label
                              for="checkbox6"
                              class="label-brand text-capitalize"
                            >
                              Pets Allow
                            </label>
                          </div>
                          <div class="checkbox checkbox-primary">
                            <input id="checkbox7" type="checkbox" />
                            <label
                              for="checkbox7"
                              class="label-brand text-capitalize"
                            >
                              Air Conditioning
                            </label>
                          </div>

                          <div class="checkbox checkbox-primary">
                            <input id="checkbox8" type="checkbox" />
                            <label
                              for="checkbox8"
                              class="label-brand text-capitalize"
                            >
                              Gym
                            </label>
                          </div>

                          <div class="checkbox checkbox-primary">
                            <input id="checkbox9" type="checkbox" />
                            <label
                              for="checkbox9"
                              class="label-brand text-capitalize"
                            >
                              Alarm
                            </label>
                          </div>
                          <div class="checkbox checkbox-primary">
                            <input id="checkbox10" type="checkbox" />
                            <label
                              for="checkbox10"
                              class="label-brand text-capitalize"
                            >
                              Window Covering
                            </label>
                          </div>
                          <div class="checkbox checkbox-primary">
                            <input id="checkbox11" type="checkbox" />
                            <label
                              for="checkbox11"
                              class="label-brand text-capitalize"
                            >
                              Free WiFi
                            </label>
                          </div>
                          <div class="checkbox checkbox-primary">
                            <input id="checkbox12" type="checkbox" />
                            <label
                              for="checkbox12"
                              class="label-brand text-capitalize"
                            >
                              Car Parking
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="products__filter__footer">
                    <div class="form-group mb-0">
                      <button class="btn btn-primary text-capitalize btn-block">
                        <i class="fa fa-search ml-1"></i> search property{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- END FORM FILTER -->
                    <!-- FORM FILTER --> */}

              {/* <!-- END FORM FILTER --> */}
              <div class="sticky-top">
                {/* <!-- PROFILE AGENT --> */}
                <div class="profile__agent mb-30">
                  <div class="profile__agent__group">
                    <div class="profile__agent__header">
                      <div class="profile__agent__header-avatar">
                        <figure>
                          <img
                            src="images/80x80.jpg"
                            alt=""
                            class="img-fluid"
                          />
                        </figure>

                        <ul class="list-unstyled mb-0">
                          <li>
                            <h5 class="text-capitalize">jhon doe</h5>
                          </li>
                          <li>
                            <a href="tel:123456">
                              <i class="fa fa-phone-square mr-1"></i>
                              (123)456-7890
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <i class=" fa fa-building mr-1"></i>
                              Company name
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a href="javascript:void(0)" class="text-primary">
                              View My Listing
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="profile__agent__body">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Phone"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div class="form-group mb-0">
                        <textarea
                          class="form-control required"
                          rows="5"
                          required="required"
                          placeholder="I'm interest in [ Listing Single ]"
                        ></textarea>
                      </div>
                    </div>
                    <div class="profile__agent__footer">
                      <div class="form-group mb-0">
                        <button class="btn btn-primary text-capitalize btn-block">
                          {" "}
                          send message <i class="fa fa-paper-plane ml-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>


        </div>
      </section>
      {/* <!-- END SINGLE DETAIL -->

    <!-- CALL TO ACTION --> */}
      <section class="cta-v1 py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-9">
              <h2 class="text-uppercase text-white">
                Looking To Sell Or Rent Your Property?
              </h2>
              <p class="text-capitalize text-white">
                We Will Assist You In The Best And Comfortable Property Services
                For You
              </p>
            </div>
            <div class="col-lg-3">
              <a href="#" class="btn btn-light text-uppercase ">
                request a quote
                <i class="fa fa-angle-right ml-3 arrow-btn "></i>
              </a>
            </div>
          </div>
        </div>
      </section>
   
   
    </>
  );
};
export default SingleDetail;