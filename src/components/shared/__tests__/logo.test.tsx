import { render, screen } from "@testing-library/react";
import { Logo } from "../logo";

describe("Logo", () => {
  it("renders the logo with the correct text", () => {
    render(<Logo />);
    const logoText = screen.getByText("AnimalKind");
    expect(logoText).toBeInTheDocument();
  });

  it("renders as a link to the homepage", () => {
    render(<Logo />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
