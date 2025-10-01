import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Chatbot } from "../chatbot";
import * as chatbotFlow from "@/ai/flows/chatbot";

// Mock the AI flow
jest.mock("@/ai/flows/chatbot");
const mockedChatbot = jest.mocked(chatbotFlow.chatbot);

describe("Chatbot", () => {
  it("toggles the chat window when the button is clicked", async () => {
    render(<Chatbot />);

    const toggleButton = screen.getByRole("button", { name: /Toggle Chat/i });

    // Initially, the chat window is closed
    expect(screen.queryByText("AnimalKind Assistant")).not.toBeInTheDocument();

    // Open the chat window
    fireEvent.click(toggleButton);
    await waitFor(() => {
      expect(screen.getByText("AnimalKind Assistant")).toBeInTheDocument();
    });

    // Close the chat window
    fireEvent.click(toggleButton);
    await waitFor(() => {
      expect(
        screen.queryByText("AnimalKind Assistant"),
      ).not.toBeInTheDocument();
    });
  });

  it("sends a message and displays a response", async () => {
    mockedChatbot.mockResolvedValue({ content: "Hello from the AI!" });

    render(<Chatbot />);

    const toggleButton = screen.getByRole("button", { name: /Toggle Chat/i });
    fireEvent.click(toggleButton);

    const input = screen.getByPlaceholderText(/Type a message/i);
    const sendButton = screen.getByRole("button", { name: /Send/i });

    // Type a message and send
    fireEvent.change(input, { target: { value: "Hello" } });
    fireEvent.click(sendButton);

    // Check if the user's message appears
    await waitFor(() => {
      expect(screen.getByText("Hello")).toBeInTheDocument();
    });

    // Check if the AI's response appears
    await waitFor(() => {
      expect(screen.getByText("Hello from the AI!")).toBeInTheDocument();
    });
  });
});
