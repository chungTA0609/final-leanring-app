import renderer from "react-test-renderer";
import RatingComponent from "./RatingComponent";

it("renders correctly", () => {
  const tree = renderer
    .create(<RatingComponent rating={10 / 2}></RatingComponent>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
