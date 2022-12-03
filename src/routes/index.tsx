import { component$, Resource, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead, useEndpoint } from '@builder.io/qwik-city';
import * as solutions from "../solutions/all-exported";
import styles from "./index.css?inline";

export const onGet = () => {
  const solutionsMap: Record<string, string> = {};

  let i = 1;
  for (const key in solutions) {
    const solution = solutions[key as keyof typeof solutions];
    solutionsMap[`Day ${i}`] = solution();
    i++
  }

  return solutionsMap
}

export default component$(() => {
  const endpoint = useEndpoint<typeof onGet>();
  useStylesScoped$(styles)
  return (
    <div>
      <h1><a href="https://adventofcode.com/2022" target="_blank">Advent of Code</a></h1>
      <Resource value={endpoint} onResolved={(solutionsMap) => {
        return <div>
          {Object.entries(solutionsMap).map((entries) => {
            const [key, value] = entries;
            return <>
              <h3>{key}</h3>
              {value.split("\n").map(line => <p>{line}</p>)}
            </>
          })}
        </div>
      }} />
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
