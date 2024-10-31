import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Todo App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
        <>
            <h1>Hello world</h1>
        </>
  );
}
 
