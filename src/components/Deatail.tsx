const Detail = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title">
                        Responsive embed video 4:3
                      </h4>
                      <p className="sub-header font-13">
                        Use className <code>.embed-responsive-4by3</code>
                      </p>

                      <div className="embed-responsive embed-responsive-4by3">
                        <iframe
                          className="embed-responsive-item"
                          src="https://www.youtube.com/embed/PrUxWZiQfy4?ecver=1"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div>
                    <div>
                      <a href="#" className="text-primary">
                        T-shirts
                      </a>
                    </div>
                    <h4 className="mb-1">
                      Hoodie for men (Blue)
                      <a className="text-muted">
                        <i className="mdi mdi-square-edit-outline ml-2"></i>
                      </a>
                    </h4>

                    <p className="text-muted mr-3 font-16">
                      <span className="mdi mdi-star text-warning"></span>
                      <span className="mdi mdi-star text-warning"></span>
                      <span className="mdi mdi-star text-warning"></span>
                      <span className="mdi mdi-star text-warning"></span>
                      <span className="mdi mdi-star"></span>
                    </p>

                    <div className="mt-3">
                      <h6 className="text-danger text-uppercase">10 % Off</h6>
                      <h4>
                        Price :
                        <span className="text-muted mr-2">
                          <del>$ 50</del>
                        </span>
                        <b>$ 45</b>
                      </h4>
                    </div>
                    <hr />

                    <div>
                      <p>
                        If several languages coalesce, the grammar of the
                        resulting language is more simple and regular than that
                        of the individual new common simple and regular than
                        existing
                      </p>

                      <div className="mt-3">
                        <h5 className="font-size-14">Specification :</h5>
                        <div className="row">
                          <div className="col-md-6">
                            <ul className="list-unstyled product-desc-list">
                              <li>
                                <i className="mdi mdi-circle-medium mr-1 align-middle"></i>
                                Full Sleeve
                              </li>
                              <li>
                                <i className="mdi mdi-circle-medium mr-1 align-middle"></i>
                                Cotton
                              </li>
                              <li>
                                <i className="mdi mdi-circle-medium mr-1 align-middle"></i>
                                All Sizes available
                              </li>
                              <li>
                                <i className="mdi mdi-circle-medium mr-1 align-middle"></i>
                                4 Different Color
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul className="list-unstyled product-desc-list">
                              <li>
                                <i className="mdi mdi-circle-medium mr-1 align-middle"></i>
                                All Sizes available
                              </li>
                              <li>
                                <i className="mdi mdi-circle-medium mr-1 align-middle"></i>
                                4 Different Color
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <form className="form-inline mb-3">
                          <label className="my-1 mr-2">Quantity</label>
                          <select
                            className="custom-select my-1 mr-sm-3"
                            id="quantityinput"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                          </select>

                          <label className="my-1 mr-2">Size</label>
                          <select
                            className="custom-select my-1 mr-sm-3"
                            id="sizeinput"
                          >
                            <option selected>Small</option>
                            <option value="1">Medium</option>
                            <option value="2">Large</option>
                            <option value="3">X-large</option>
                          </select>
                        </form>

                        <div>
                          <button
                            type="button"
                            className="btn btn-success waves-effect waves-light"
                          >
                            <span className="btn-label">
                              <i className="mdi mdi-cart"></i>
                            </span>
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;
