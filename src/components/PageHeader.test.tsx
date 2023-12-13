import renderer from "react-test-renderer";
import PageHeader from "./PageHeader";

it("renders correctly", () => {
  const tree = renderer.create(<PageHeader></PageHeader>).toJSON();
  expect(tree).toMatchSnapshot();
});
