import { render, screen } from "@testing-library/react";
import { BlogPostCard } from "../blog-post-card";
import type { BlogPost } from "@/lib/types";

const mockPost: BlogPost = {
  id: "1",
  title: "Bringing Your New Dog Home",
  author: "Jane Doe, Adoption Specialist",
  date: "July 15, 2024",
  category: "Training",
  shortDescription: "The first few days with your new companion are crucial.",
  content: "Full content here.",
  image: "blog-1",
};

describe("BlogPostCard", () => {
  it("renders blog post details correctly", () => {
    render(<BlogPostCard post={mockPost} />);

    expect(screen.getByText("Training")).toBeInTheDocument();
    expect(screen.getByText("Bringing Your New Dog Home")).toBeInTheDocument();
    expect(screen.getByText(/Jane Doe/)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/blog/1");
  });
});
