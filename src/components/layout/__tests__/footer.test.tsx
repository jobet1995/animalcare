import { render, screen } from "@testing-library/react";
import { Footer } from "../footer";

// Mock the NewsletterForm component to avoid hydration issues in test environment
jest.mock("../footer", () => {
  const originalModule = jest.requireActual("../footer");
  return {
    ...originalModule,
    NewsletterForm: () => <form data-testid="newsletter-form"></form>,
  };
});

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname() {
    return "/";
  },
}));

describe("Footer", () => {
  it("renders the footer with key sections", () => {
    render(<Footer />);

    // Check for Quick Links
    expect(screen.getByText("Quick Links")).toBeInTheDocument();

    // Check for Contact Us
    expect(screen.getByText("Contact Us")).toBeInTheDocument();

    // Check for Newsletter
    expect(screen.getByText("Newsletter")).toBeInTheDocument();

    // Check for copyright
    expect(
      screen.getByText(
        `© ${new Date().getFullYear()} AnimalKind. All Rights Reserved.`,
      ),
    ).toBeInTheDocument();
  });
});
