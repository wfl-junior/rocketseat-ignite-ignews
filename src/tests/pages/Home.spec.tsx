import { render, screen } from "@testing-library/react";
import Home from "../../pages";

jest.mock("next/router");

jest.mock("next-auth/react", () => ({
  useSession: () => ({
    data: null,
    status: "unauthenticated",
  }),
}));

describe("Home page", () => {
  it("should render correctly", () => {
    render(
      <Home product={{ id: "fake-product-id", priceFormatted: "$9,90" }} />,
    );

    expect(screen.getByText(/\$9,90/)).toBeInTheDocument();
  });
});
