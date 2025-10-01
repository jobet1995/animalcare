import { render, screen } from "@testing-library/react";
import { PageHeader } from "../page-header";

describe("PageHeader", () => {
  const titleText = "Test Title";
  const subtitleText = "This is a test subtitle.";

  it("renders the title correctly", () => {
    render(<PageHeader title={titleText} />);
    const titleElement = screen.getByRole("heading", { name: titleText });
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the subtitle when provided", () => {
    render(<PageHeader title={titleText} subtitle={subtitleText} />);
    const subtitleElement = screen.getByText(subtitleText);
    expect(subtitleElement).toBeInTheDocument();
  });

  it("does not render a subtitle when not provided", () => {
    render(<PageHeader title={titleText} />);
    const subtitleElement = screen.queryByText(subtitleText);
    expect(subtitleElement).not.toBeInTheDocument();
  });

  it("applies custom className to the section", () => {
    const customClass = "my-custom-class";
    render(<PageHeader title={titleText} className={customClass} />);
    const sectionElement = screen.getByText(titleText).closest("section");
    expect(sectionElement).toHaveClass(customClass);
  });
});
