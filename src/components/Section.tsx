import SectionItem from "./SectionItem";
import TitleSection from "./TitleSection";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
const Section = () => {
  const films = useSelector((state: RootState) => state.film.films);
  return (
    <>
      <div className="col-12">
        <div className="page-title-box">
          <h4 className="page-title">List film !</h4>{" "}
        </div>
      </div>
      <TitleSection titleSection="Display" />
      <div className="row">
        {films.map((item) => (
          <SectionItem
            id={item.id}
            imgSrc={item.poster_path}
            name={item.original_title}
            vote={item.vote_average}
            price={`${item.revenue}`}
          />
        ))}
      </div>
    </>
  );
};
export default Section;
