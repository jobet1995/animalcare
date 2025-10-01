import { render, screen } from "@testing-library/react";
import { EventCard } from "../event-card";
import type { Event } from "@/lib/types";

const mockEvent: Event = {
  id: "1",
  title: "Weekend Adoption Fair",
  date: "Saturday, August 10, 2024",
  location: "Central Park",
  description: "Join us for our biggest adoption event of the summer!",
  type: "Adoption Drive",
  image: "event-1",
};

describe("EventCard", () => {
  it("renders event details correctly", () => {
    render(<EventCard event={mockEvent} />);

    expect(screen.getByText("Weekend Adoption Fair")).toBeInTheDocument();
    expect(screen.getByText("Saturday, August 10, 2024")).toBeInTheDocument();
    expect(screen.getByText("Central Park")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Sign Up" })).toBeInTheDocument();
  });
});
