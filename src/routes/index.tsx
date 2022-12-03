import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from "./index.css?inline"

export default component$(() => {
  useStylesScoped$(styles)
  return (
    <div>
      <h1><a href="https://adventofcode.com/2022" target="_blank">Advent of Code</a></h1>

    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
