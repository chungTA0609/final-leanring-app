import { Link } from "react-router-dom";

const SectionItem = ({
  imgSrc,
  name,
  price,
  id,
}: {
  imgSrc: string;
  name: string;
  price: string;
  id: string;
}) => {
  return (
    <>
      <div className="col-md-6 col-xl-3">
        <div className="card product-box">
          <div className="product-img">
            <div className="p-3">
              <img src={imgSrc} alt="product-pic" className="img-fluid" />
            </div>{" "}
            <div className="product-action">
              <div className="d-flex">
                <a href="#" className="btn btn-white btn-block action-btn m-2">
                  <i className="ri-edit-2-fill align-middle"></i> Detail
                </a>{" "}
              </div>
            </div>
          </div>{" "}
          <div className="product-info border-top p-3">
            <div>
              <h5 className="font-16 mt-0 mb-1">
                <Link to={id} className="text-dark">
                  {name}
                </Link>
              </h5>{" "}
              <p className="text-muted">
                <i className="mdi mdi-star text-warning"></i>{" "}
                <i className="mdi mdi-star text-warning"></i>{" "}
                <i className="mdi mdi-star text-warning"></i>{" "}
                <i className="mdi mdi-star text-warning"></i>{" "}
                <i className="mdi mdi-star text-warning"></i>
              </p>{" "}
              <h4 className="m-0">
                <span className="text-muted"> Price : $ {price}</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionItem;
