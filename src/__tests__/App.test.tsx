import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

// Component to test
import App from "../App";

// Tests
test("Renders app component correctly", async () => {
  // Setup
  render(<App />);
  const buttonCount = await screen.findByRole("button");

  // Pre expectations
  expect(buttonCount.innerHTML).toBe("Sample Button clicked: ButtonCountHere");

  // Init
  user.click(buttonCount);
  user.click(buttonCount);

  // Post expectations
  //   expect(true).toBeTruthy();
  expect(buttonCount.innerHTML).toBe("Sample Button clicked: ButtonCountHere");
});
