import { useSelector } from "react-redux";
import DetailComponent from "./DetailComponent";
import { RootState } from "../app/store";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const films = useSelector((state: RootState) => state.film.films);
  return (
    <>
      <DetailComponent
        detail={
          films.find((e) => e.id === parseInt(params.productId ?? "0")) ?? null
        }
      />
    </>
  );
};
export default Detail;
