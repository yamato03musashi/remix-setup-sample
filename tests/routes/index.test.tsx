import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Index from "../../app/routes/_index";

test("test1", () => {
  render(<Index />);
  expect(screen.getByText("Welcome to Remix on Cloudflare")).toBeInTheDocument();
});