import renderer from "react-test-renderer";
import HomePage from "./Hompage";

jest.mock("../assets/images/bg-material.png");
jest.mock("../assets/images/bg-auth-dark.jpg");
jest.mock("../assets/images/bg-auth.jpg");

it("changes the class when hovered", () => {
  const component = renderer.create(<HomePage></HomePage>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
});
