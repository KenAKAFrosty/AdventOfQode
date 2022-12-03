import { component$, Resource, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead, useEndpoint } from '@builder.io/qwik-city';
import * as solutions from "../solutions/all";
import styles from "./index.css?inline";

export const onGet = () => {
  return {
    "Day 1": solutions.day1(),
    "Day 2": solutions.day2(),
    "Day 3": solutions.day3()
  }
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
              <p>{value}</p>
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
