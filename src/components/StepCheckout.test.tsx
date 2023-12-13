// import renderer from "react-test-renderer";
import StepCheckout from "./StepCheckout";
import { screen, render } from "@testing-library/react";
it("renders correctly", () => {
  const tree = render(<StepCheckout></StepCheckout>);
  expect(tree).toMatchSnapshot();
  const linkElement = screen.getByText(/Billing Information/i);
  expect(linkElement).toBeTruthy();
});
