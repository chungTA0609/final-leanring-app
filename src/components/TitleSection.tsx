import { useState } from "react";
import { useDispatch } from "react-redux";
import { sortFilm } from "../app/feature/film/filmSlice";
import { Filtering } from "../models/Filtering";

const TitleSection = ({ titleSection }: { titleSection: string }) => {
  const [selectedOption, setSelectedOption] = useState("title");
  const [sortOption, setSortOption] = useState(1);
  const dispatch = useDispatch();
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    console.log(selectedValue);

    const filterPayload: Filtering = {
      type: selectedValue,
      sort: !!sortOption,
    };
    dispatch(sortFilm(filterPayload));
  };
  const handleSelectSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    setSortOption(parseInt(selectedValue));

    const filterPayload: Filtering = {
      type: selectedOption,
      sort: !!parseInt(selectedValue),
    };
    dispatch(sortFilm(filterPayload));
  };

  return (
    <>
      <div className="row mb-md-2">
        <div className="col-sm-12 col-md-6">
          <div id="tickets-table_length" className="dataTables_length">
            <label className="d-inline-flex align-items-center">
              {titleSection}{" "}
              <select
                className="custom-select custom-select-sm"
                id="selectedOption"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="title">title</option>
                <option value="type">type</option>
                <option value="rating">rating</option>
                <option value="price">price</option>
              </select>
            </label>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div id="tickets-table_length" className="dataTables_length">
            <label className="d-inline-flex align-items-center">
              Sort{" "}
              <select
                className="custom-select custom-select-sm"
                id="sortOption"
                value={sortOption}
                onChange={handleSelectSort}
              >
                <option value={1}>ASC</option>
                <option value={0}>DSC</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default TitleSection;
