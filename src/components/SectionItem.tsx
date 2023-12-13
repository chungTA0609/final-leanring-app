import { mdiInformation } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import RatingComponent from "./RatingComponent";

const SectionItem = ({
  imgSrc,
  name,
  price,
  id,
  vote,
}: {
  imgSrc: string;
  name: string;
  price: string;
  id: number;
  vote: number;
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
                <Link
                  to={`${id}`}
                  className="btn btn-white btn-block action-btn m-2"
                >
                  <Icon path={mdiInformation} size={1} />
                  Detail
                </Link>{" "}
              </div>
            </div>
          </div>{" "}
          <div className="product-info border-top p-3">
            <div>
              <h5 className="font-16 mt-0 mb-1">
                <Link to={`${id}`} className="text-dark">
                  {name}
                </Link>
              </h5>{" "}
              <RatingComponent rating={vote / 2} />{" "}
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
