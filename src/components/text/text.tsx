import { Slot } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

type TextProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
};

export const Text = component$((props: TextProps) => {
  const Tag = props.as || "p";
  const fontSize =
    {
      h1: "text-6xl",
      h2: "text-5xl",
      h3: "text-4xl",
      h4: "text-3xl",
      h5: "text-2xl",
      h6: "text-xl",
      p: "text-base",
      span: "text-sm",
    }[Tag] ?? "text-sm";

  return (
    <Tag class={`text-slate-900 dark:text-white ${fontSize}`}>
      <Slot />
    </Tag>
  );
});
