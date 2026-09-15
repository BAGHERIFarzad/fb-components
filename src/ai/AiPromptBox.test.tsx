import {
  render,
  screen,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import {
  describe,
  expect,
  it,
  vi,
} from "vitest";

import { expectNoAccessibilityViolations } from "../test/accessibility";
import { AiPromptBox } from "./AiPromptBox";

describe("AiPromptBox", () => {
  it("renders with the default placeholder", () => {
    render(
      <AiPromptBox />
    );

    expect(
      screen.getByRole(
        "textbox",
        {
          name: "Ask anything...",
        }
      )
    ).toBeInTheDocument();
  });

  it("renders the default model label", () => {
    render(
      <AiPromptBox />
    );

    expect(
      screen.getByText(
        "FB AI · Fast"
      )
    ).toBeInTheDocument();
  });

  it("renders the attachment button by default", () => {
    render(
      <AiPromptBox />
    );

    expect(
      screen.getByRole(
        "button",
        {
          name: "Attach file",
        }
      )
    ).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    render(
      <AiPromptBox />
    );

    expect(
      screen.getByRole(
        "button",
        {
          name: "Submit prompt",
        }
      )
    ).toBeInTheDocument();
  });

  it("starts with the submit button disabled when empty", () => {
    render(
      <AiPromptBox />
    );

    expect(
      screen.getByRole(
        "button",
        {
          name: "Submit prompt",
        }
      )
    ).toBeDisabled();
  });

  it("enables submit after the user types non-whitespace content", async () => {
    const user =
      userEvent.setup();

    render(
      <AiPromptBox />
    );

    const textarea =
      screen.getByRole(
        "textbox",
        {
          name: "Ask anything...",
        }
      );

    const submit =
      screen.getByRole(
        "button",
        {
          name: "Submit prompt",
        }
      );

    expect(
      submit
    ).toBeDisabled();

    await user.type(
      textarea,
      "Hello AI"
    );

    expect(
      submit
    ).toBeEnabled();
  });

  it("keeps submit disabled for whitespace-only input", async () => {
    const user =
      userEvent.setup();

    render(
      <AiPromptBox />
    );

    const textarea =
      screen.getByRole(
        "textbox",
        {
          name: "Ask anything...",
        }
      );

    await user.type(
      textarea,
      "   "
    );

    expect(
      screen.getByRole(
        "button",
        {
          name: "Submit prompt",
        }
      )
    ).toBeDisabled();
  });

  it("submits the trimmed prompt value", async () => {
    const user =
      userEvent.setup();

    const onSubmit =
      vi.fn();

    render(
      <AiPromptBox
        onSubmit={
          onSubmit
        }
      />
    );

    const textarea =
      screen.getByRole(
        "textbox",
        {
          name: "Ask anything...",
        }
      );

    await user.type(
      textarea,
      "   Build a dashboard   "
    );

    await user.click(
      screen.getByRole(
        "button",
        {
          name: "Submit prompt",
        }
      )
    );

    expect(
      onSubmit
    ).toHaveBeenCalledTimes(
      1
    );

    expect(
      onSubmit
    ).toHaveBeenCalledWith(
      "Build a dashboard"
    );
  });

  it("does not submit an empty prompt", async () => {
    const user =
      userEvent.setup();

    const onSubmit =
      vi.fn();

    render(
      <AiPromptBox
        onSubmit={
          onSubmit
        }
      />
    );

    const submit =
      screen.getByRole(
        "button",
        {
          name: "Submit prompt",
        }
      );

    expect(
      submit
    ).toBeDisabled();

    await user.click(
      submit
    );

    expect(
      onSubmit
    ).not.toHaveBeenCalled();
  });

  it("renders the provided default value", () => {
    render(
      <AiPromptBox
        defaultValue="Explain React Server Components"
      />
    );

    expect(
      screen.getByRole(
        "textbox",
        {
          name: "Ask anything...",
        }
      )
    ).toHaveValue(
      "Explain React Server Components"
    );
  });

  it("enables submit when defaultValue contains content", () => {
    render(
      <AiPromptBox
        defaultValue="Hello"
      />
    );

    expect(
      screen.getByRole(
        "button",
        {
          name: "Submit prompt",
        }
      )
    ).toBeEnabled();
  });

  it("uses a custom placeholder as the accessible textarea name", () => {
    render(
      <AiPromptBox
        placeholder="Describe your task"
      />
    );

    expect(
      screen.getByRole(
        "textbox",
        {
          name: "Describe your task",
        }
      )
    ).toHaveAttribute(
      "placeholder",
      "Describe your task"
    );
  });

  it("renders a custom model label", () => {
    render(
      <AiPromptBox
        modelLabel="FB AI · Pro"
      />
    );

    expect(
      screen.getByText(
        "FB AI · Pro"
      )
    ).toBeInTheDocument();
  });

  it("can hide the model label", () => {
    render(
      <AiPromptBox
        showModel={false}
      />
    );

    expect(
      screen.queryByText(
        "FB AI · Fast"
      )
    ).not.toBeInTheDocument();
  });

  it("can hide the attachment button", () => {
    render(
      <AiPromptBox
        showAttachment={false}
      />
    );

    expect(
      screen.queryByRole(
        "button",
        {
          name: "Attach file",
        }
      )
    ).not.toBeInTheDocument();
  });

  it("disables the textarea and submit button when disabled", () => {
    render(
      <AiPromptBox
        disabled
        defaultValue="Existing prompt"
      />
    );

    expect(
      screen.getByRole(
        "textbox",
        {
          name: "Ask anything...",
        }
      )
    ).toBeDisabled();

    expect(
      screen.getByRole(
        "button",
        {
          name: "Submit prompt",
        }
      )
    ).toBeDisabled();
  });

  it("does not submit while disabled", async () => {
    const user =
      userEvent.setup();

    const onSubmit =
      vi.fn();

    render(
      <AiPromptBox
        disabled
        defaultValue="Existing prompt"
        onSubmit={
          onSubmit
        }
      />
    );

    const submit =
      screen.getByRole(
        "button",
        {
          name: "Submit prompt",
        }
      );

    await user.click(
      submit
    );

    expect(
      onSubmit
    ).not.toHaveBeenCalled();
  });

  it("applies custom visual props", () => {
    render(
      <AiPromptBox
        data-testid="prompt-box"
        background="#222222"
        textColor="#eeeeee"
        accent="#ff00ff"
        radius={30}
        minHeight={220}
      />
    );

    const box =
      screen.getByTestId(
        "prompt-box"
      );

    expect(
      box.style.background
    ).toBe(
      "rgb(34, 34, 34)"
    );

    expect(
      box.style.color
    ).toBe(
      "rgb(238, 238, 238)"
    );

    expect(
      box.style.borderRadius
    ).toBe(
      "30px"
    );

    expect(
      box.style.minHeight
    ).toBe(
      "220px"
    );

    expect(
      box.style.getPropertyValue(
        "--fb-ai-prompt-accent"
      )
    ).toBe(
      "#ff00ff"
    );
  });

  it("applies a custom class name", () => {
    render(
      <AiPromptBox
        data-testid="prompt-box"
        className="custom-prompt-box"
      />
    );

    expect(
      screen.getByTestId(
        "prompt-box"
      )
    ).toHaveClass(
      "fb-ai-prompt-box",
      "custom-prompt-box"
    );
  });

  it("forwards HTML attributes to the root element", () => {
    render(
      <AiPromptBox
        data-testid="prompt-box"
        aria-label="AI assistant prompt"
        title="Prompt composer"
      />
    );

    const box =
      screen.getByTestId(
        "prompt-box"
      );

    expect(
      box
    ).toHaveAttribute(
      "aria-label",
      "AI assistant prompt"
    );

    expect(
      box
    ).toHaveAttribute(
      "title",
      "Prompt composer"
    );
  });

  it("preserves custom inline styles", () => {
    render(
      <AiPromptBox
        data-testid="prompt-box"
        style={{
          marginTop:
            "20px",
        }}
      />
    );

    expect(
      screen.getByTestId(
        "prompt-box"
      )
    ).toHaveStyle({
      marginTop:
        "20px",
    });
  });

  it("has no obvious accessibility violations", async () => {
    const {
      container,
    } =
      render(
        <AiPromptBox />
      );

    await expectNoAccessibilityViolations(
      container
    );
  });
});