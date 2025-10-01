import { render, screen } from "@testing-library/react";
import { Navbar } from "../navbar";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname() {
    return "/";
  },
}));

describe("Navbar", () => {
  it("renders the main navigation links", () => {
    render(<Navbar />);

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Animals" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Adopt" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Pet Match" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Donate Now" }),
    ).toBeInTheDocument();
  });
});
