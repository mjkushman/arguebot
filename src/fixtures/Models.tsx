const Models: { provider: string; model: string; label: string }[] = [
  { provider: "openai", model: "gpt-4o", label: "GPT-4o" },
  { provider: "openai", model: "gpt-4", label: "GPT-4" },
  { provider: "openai", model: "gpt-4o-mini", label: "GPT-4o mini" },
  { provider: "openai", model: "gpt-3.5-turbo", label: "GPT-3.5 Turbo" },
  {
    provider: "anthropic",
    model: "claude-3-5-sonnet-20240620",
    label: "Claude 3.5 Sonnet",
  },
  {
    provider: "anthropic",
    model: "claude-3-opus-20240229",
    label: "Claude 3 Opus",
  },
  {
    provider: "anthropic",
    model: "claude-3-haiku-20240307",
    label: "Claude 3 Haiku",
  },
  {
    provider: "groq",
    model: "llama-3.1-8b-instant",
    label: "Llama 3.1 Instant",
  },
  {
    provider: "groq",
    model: "llama-3.1-405b-reasoning",
    label: "Llama 3.1 Reasoning",
  },
];

export default Models;
