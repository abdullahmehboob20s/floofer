import { render, screen } from "@testing-library/react";
import App from "./App";

import { test } from "@playwright/test";

test("test browser", async ({ page }) => {
  // point this to wherever you want
  await page.goto("http://localhost:3000/");

  // keep browser open
  await page.pause();
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
