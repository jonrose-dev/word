import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Text } from "~/components/text";

export default component$(() => {
  return (
    <div class="bg-white dark:bg-slate-800 h-screen flex w-screen justify-center items-center">
      <Text as="h1">Welcome</Text>
      <Text>I'm Jon</Text>
      <button
        onClick$={() => alert("hi")}
        class="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 rounded"
      >
        Click me
      </button>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Jon",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
