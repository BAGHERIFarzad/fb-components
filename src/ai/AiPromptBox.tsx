import {
  useState,
} from "react";

import type {
  FormEvent,
  HTMLAttributes,
} from "react";

import {
  ArrowUp,
  Paperclip,
  Sparkles,
} from "lucide-react";

import "./AiPromptBox.css";

export interface AiPromptBoxProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "onSubmit"
  > {
  background?: string;

  accent?: string;

  textColor?: string;

  radius?: number;

  minHeight?: number;

  showModel?: boolean;

  showAttachment?: boolean;

  modelLabel?: string;

  placeholder?: string;

  defaultValue?: string;

  disabled?: boolean;

  onSubmit?: (
    value: string
  ) => void;

  className?: string;
}

export function AiPromptBox({
  background = "#111116",

  accent = "#9b7cff",

  textColor = "#ffffff",

  radius = 20,

  minHeight = 150,

  showModel = true,

  showAttachment = true,

  modelLabel = "FB AI · Fast",

  placeholder =
    "Ask anything...",

  defaultValue = "",

  disabled = false,

  onSubmit,

  className = "",

  style,

  ...props
}: AiPromptBoxProps) {
  const [
    value,
    setValue,
  ] =
    useState(
      defaultValue
    );

  function handleSubmit(
    event:
      FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const trimmed =
      value.trim();

    if (
      disabled ||
      !trimmed
    ) {
      return;
    }

    onSubmit?.(
      trimmed
    );
  }

  return (
    <div
      {...props}
      className={`fb-ai-prompt-box ${className}`}
      style={{
        ...style,

        background,

        color:
          textColor,

        borderRadius:
          radius,

        minHeight,

        ["--fb-ai-prompt-accent" as string]:
          accent,
      }}
    >
      <form
        className="fb-ai-prompt-box__form"
        onSubmit={
          handleSubmit
        }
      >
        <div className="fb-ai-prompt-box__field">
          <Sparkles
            className="fb-ai-prompt-box__spark"
            size={16}
            aria-hidden="true"
          />

          <textarea
            value={
              value
            }
            disabled={
              disabled
            }
            placeholder={
              placeholder
            }
            aria-label={
              placeholder
            }
            onChange={(
              event
            ) =>
              setValue(
                event.target
                  .value
              )
            }
          />
        </div>

        <div className="fb-ai-prompt-box__footer">
          <div className="fb-ai-prompt-box__actions">
            {showAttachment && (
              <button
                type="button"
                aria-label="Attach file"
                className="fb-ai-prompt-box__secondary"
              >
                <Paperclip
                  size={15}
                  aria-hidden="true"
                />
              </button>
            )}

            {showModel && (
              <span className="fb-ai-prompt-box__model">
                {
                  modelLabel
                }
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={
              disabled ||
              !value.trim()
            }
            className="fb-ai-prompt-box__submit"
            aria-label="Submit prompt"
          >
            <ArrowUp
              size={16}
              aria-hidden="true"
            />
          </button>
        </div>
      </form>
    </div>
  );
}